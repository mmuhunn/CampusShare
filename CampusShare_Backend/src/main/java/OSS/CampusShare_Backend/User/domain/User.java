package OSS.CampusShare_Backend.User.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 사용자 고유 ID (자동 생성)
    private String name; // 사용자 이름
    private String studentNumber; // 학번
    private String password; // 비밀번호
    private int rank; // 랭킹 (예: 업로드 횟수로 계산)

    // 생성자
    public User(String name, String studentNumber, String password) {
        this.name = name;
        this.studentNumber = studentNumber;
        this.password = password;
        this.rank = 0; // 초기 랭킹 값
    }
}
