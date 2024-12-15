# Answer API Documentation

## Base URL
```
http://localhost:8080/api/answer
```

---

## Endpoints

---

### **1. Create a New Answer**

- **Method**: `POST`
- **Endpoint**: `/create`
- **Description**: Create a new answer for a specific question.
- **Headers**:
    - `Content-Type`: `application/json`
- **Parameters**:
    - **Query Parameters**:
        - `questionId` (Long, Required): The ID of the question to which the answer belongs.
        - `studentID` (String, Required): The ID of the student submitting the answer.
        - `content` (String, Required): The content of the answer.
- **Request Example**:
  ```
  POST /api/answer/create?questionId=1&studentID=20240001&content=This%20is%20an%20answer
  ```
- **Response**:
    - **200 OK**:
      ```json
      {
          "id": 1,
          "questionId": 1,
          "studentID": "20240001",
          "content": "This is an answer",
          "createdAt": "2024-12-15T01:50:00"
      }
      ```

---

### **2. Get All Answers for a Specific Question**

- **Method**: `GET`
- **Endpoint**: `/question/{questionId}`
- **Description**: Retrieve all answers for a specific question.
- **Path Parameters**:
    - `questionId` (Long, Required): The ID of the question whose answers are to be retrieved.
- **Request Example**:
  ```
  GET /api/answer/question/1
  ```
- **Response**:
    - **200 OK**:
      ```json
      [
          {
              "id": 1,
              "questionId": 1,
              "studentID": "20240001",
              "content": "This is the first answer",
              "createdAt": "2024-12-15T01:50:00"
          },
          {
              "id": 2,
              "questionId": 1,
              "studentID": "20240002",
              "content": "This is the second answer",
              "createdAt": "2024-12-15T01:55:00"
          }
      ]
      ```

---

### **3. Get a Specific Answer by ID**

- **Method**: `GET`
- **Endpoint**: `/{id}`
- **Description**: Retrieve a specific answer by its ID.
- **Path Parameters**:
    - `id` (Long, Required): The ID of the answer to be retrieved.
- **Request Example**:
  ```
  GET /api/answer/1
  ```
- **Response**:
    - **200 OK**:
      ```json
      {
          "id": 1,
          "questionId": 1,
          "studentID": "20240001",
          "content": "This is an answer",
          "createdAt": "2024-12-15T01:50:00"
      }
      ```
    - **404 Not Found**:
      ```json
      {
          "error": "Answer not found"
      }
      ```

---

### **4. Delete an Answer by ID**

- **Method**: `DELETE`
- **Endpoint**: `/{id}`
- **Description**: Delete a specific answer by its ID.
- **Path Parameters**:
    - `id` (Long, Required): The ID of the answer to be deleted.
- **Request Example**:
  ```
  DELETE /api/answer/1
  ```
- **Response**:
    - **200 OK**:
      ```json
      {
          "message": "The answer has been deleted."
      }
      ```
    -  **404 Not Found**:
    ```json
    {
        "error": "Answer not found."
    }
    ```

---



# Question API Documentation

## Base URL
```
http://localhost:8080/api/question
```

---

## Endpoints

---

### **1. Create a New Question**

- **Method**: `POST`
- **Endpoint**: `/create`
- **Description**: Create a new question.
- **Headers**:
    - `Content-Type`: `application/json`
- **Parameters**:
    - **Query Parameters**:
        - `studentID` (String, Required): The ID of the student creating the question.
        - `content` (String, Required): The content of the question.
- **Request Example**:
  ```
  POST /api/question/create?studentID=20240001&content=What%20is%20the%20deadline%20for%20the%20project%3F
  ```
- **Response**:
    - **200 OK**:
      ```json
      {
          "id": 1,
          "studentID": "20240001",
          "content": "What is the deadline for the project?",
          "createdAt": "2024-12-15T02:00:00"
      }
      ```

---

### **2. Get All Questions**

- **Method**: `GET`
- **Endpoint**: `/all`
- **Description**: Retrieve all questions.
- **Request Example**:
  ```
  GET /api/question/all
  ```
- **Response**:
    - **200 OK**:
      ```json
      [
          {
              "id": 1,
              "studentID": "20240001",
              "content": "What is the deadline for the project?",
              "createdAt": "2024-12-15T02:00:00"
          },
          {
              "id": 2,
              "studentID": "20240002",
              "content": "How do I submit my assignment?",
              "createdAt": "2024-12-15T02:05:00"
          }
      ]
      ```

---

### **3. Get a Specific Question by ID**

- **Method**: `GET`
- **Endpoint**: `/{id}`
- **Description**: Retrieve a specific question by its ID.
- **Path Parameters**:
    - `id` (Long, Required): The ID of the question to retrieve.
- **Request Example**:
  ```
  GET /api/question/1
  ```
- **Response**:
    - **200 OK**:
      ```json
      {
          "id": 1,
          "studentID": "20240001",
          "content": "What is the deadline for the project?",
          "createdAt": "2024-12-15T02:00:00"
      }
      ```
    - **404 Not Found**:
      ```json
      {
          "error": "Question not found"
      }
      ```

---

### **4. Delete a Question by ID**

- **Method**: `DELETE`
- **Endpoint**: `/{id}`
- **Description**: Delete a specific question by its ID.
- **Path Parameters**:
    - `id` (Long, Required): The ID of the question to delete.
- **Request Example**:
  ```
  DELETE /api/question/1
  ```
- **Response**:
    - **200 OK**:
      ```json
      {
          "message": "The question has been deleted."
      }
      ```
    - **404 Not Found**:
      ```json
      {
          "error": "Question not found."
      }
      ```

---

# Share API Documentation

## Base URL
```
http://localhost:8080/api/shares
```

---

## Endpoints

---

### **1. Upload Content**

- **Method**: `POST`
- **Endpoint**: `/upload`
- **Description**: Upload content with a file attachment.
- **Headers**:
    - `Content-Type`: `application/json`
- **Parameters**:
    - **Query Parameters**:
        - `studentNumber` (String, Required): The student number of the uploader.
        - `title` (String, Required): The title of the content.
        - `content` (String, Required): The content body.
        - `file` (String, Required): The file name or path to upload.
- **Request Example**:
  ```
  POST /api/shares/upload?studentNumber=20240001&title=Lecture%20Notes&content=These%20are%20my%20notes&file=notes.pdf
  ```
- **Response**:
    - **200 OK**:
      ```json
      {
          "id": "1",
          "studentNumber": "20240001",
          "title": "Lecture Notes",
          "content": "These are my notes",
          "file": "notes.pdf",
          "createdAt": "2024-12-15T03:00:00"
      }
      ```

---

### **2. Download Content**

- **Method**: `POST`
- **Endpoint**: `/download/{uploadId}`
- **Description**: Download content by its upload ID.
- **Path Parameters**:
    - `uploadId` (String, Required): The ID of the content to download.
- **Request Example**:
  ```
  POST /api/shares/download/1
  ```
- **Response**:
    - **200 OK**:
      ```json
      {
          "message": "Download successful!"
      }
      ```
    - **404 Not Found**:
      ```json
      {
          "error": "Content not found."
      }
      ```

---

### **3. Get All Shared Content**

- **Method**: `GET`
- **Endpoint**: `/`
- **Description**: Retrieve all shared content.
- **Request Example**:
  ```
  GET /api/shares/
  ```
- **Response**:
    - **200 OK**:
      ```json
      [
          {
              "id": "1",
              "studentNumber": "20240001",
              "title": "Lecture Notes",
              "content": "These are my notes",
              "file": "notes.pdf",
              "createdAt": "2024-12-15T03:00:00"
          },
          {
              "id": "2",
              "studentNumber": "20240002",
              "title": "Final Exam Guide",
              "content": "This is the guide for the final exam",
              "file": "final_guide.pdf",
              "createdAt": "2024-12-15T03:05:00"
          }
      ]
      ```

---

### **4. Search Content by Title**

- **Method**: `GET`
- **Endpoint**: `/search`
- **Description**: Search for content by title.
- **Parameters**:
    - **Query Parameters**:
        - `title` (String, Required): The title to search for.
- **Request Example**:
  ```
  GET /api/shares/search?title=Lecture%20Notes
  ```
- **Response**:
    - **200 OK**:
      ```json
      [
          {
              "id": "1",
              "studentNumber": "20240001",
              "title": "Lecture Notes",
              "content": "These are my notes",
              "file": "notes.pdf",
              "createdAt": "2024-12-15T03:00:00"
          }
      ]
      ```

---


# User API Documentation

## Base URL
```
http://localhost:8080/api
```

---

## Endpoints

---

### **1. Register a New User**

- **Method**: `POST`
- **Endpoint**: `/register`
- **Description**: Register a new user.
- **Headers**:
    - `Content-Type`: `application/json`
- **Request Body**:
  ```json
  {
      "name": "John Doe",
      "studentNumber": "20240001",
      "password": "securePassword123"
  }
  ```
- **Request Example**:
  ```
  POST /api/user/register
  ```
  ```json
  {
      "name": "John Doe",
      "studentNumber": "20240001",
      "password": "securePassword123"
  }
  ```
- **Response**:
    - **200 OK**:
      ```json
      {
          "id": 1,
          "name": "John Doe",
          "studentNumber": "20240001",
          "password": "securePassword123",
          "createdAt": "2024-12-15T03:15:00"
      }
      ```

---

### **2. User Login**

- **Method**: `POST`
- **Endpoint**: `/login`
- **Description**: Authenticate a user by their student number and password.
- **Headers**:
    - `Content-Type`: `application/json`
- **Parameters**:
    - **Query Parameters**:
        - `studentNumber` (String, Required): The student number of the user.
        - `password` (String, Required): The password of the user.
- **Request Example**:
  ```
  POST /api/user/login?studentNumber=20240001&password=securePassword123
  ```
- **Response**:
    - **200 OK**:
      ```json
      {
          "message": "Login Success!"
      }
      ```
    - **401 Unauthorized**:
      ```json
      {
          "error": "Invalid student number or password"
      }
      ```

---

## Notes

1. **Error Handling**:
    - If the `studentNumber` or `password` is incorrect during login, a `401 Unauthorized` response will be returned.

2. **Content-Type**:
    - Ensure `Content-Type` is set to `application/json` for the `/register` endpoint.

3. **Base URL**:
    - All API calls are relative to `/api/user`.

---








