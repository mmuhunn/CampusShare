package OSS.CampusShare_Backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(auth -> auth
            // Swagger UI 경로 및 API 문서 경로는 인증 없이 접근 허용
            .requestMatchers(
                "/swagger-ui/**",
                "/v3/api-docs/**",
                "/swagger-ui.html",
                "/v3/api-docs.yaml"
            ).permitAll()
            // 나머지 모든 요청은 인증 필요
        )
        // CSRF 비활성화
        .csrf(csrf -> csrf.disable())
        // 세션 비활성화 (STATELESS 모드 사용)
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

    return http.build(); // SecurityFilterChain 빌드
  }
}
