package Backend_simpleResults.CampusShare_demo.user.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class User {
    private Long id; // Unique ID for the user (managed in memory storage)
    private String name; // User name
    private String studentNumber; // Student number
    private String password; // Password
    private int userRank; // Ranking (e.g., calculated based on the number of uploads)

    // Constructor
    public User(String name, String studentNumber, String password) {
        this.name = name;
        this.studentNumber = studentNumber;
        this.password = password;
        this.userRank = 0; // Initial ranking value
    }
}


