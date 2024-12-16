import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateAccount from "./CreateAccount";

// window.alert를 mock 처리
beforeEach(() => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});

describe("CreateAccount Component", () => {
  test("필수 필드 미입력 시 경고창 표시", () => {
    render(<CreateAccount />);
    const createButton = screen.getByText("Create Account");
    fireEvent.click(createButton);
    expect(window.alert).toHaveBeenCalledWith("All fields are required.");
  });

  test("이메일 형식이 유효하지 않을 경우 경고창 표시", () => {
    render(<CreateAccount />);
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "John" }
    });
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Doe" }
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "invalid-email" }
    });
    fireEvent.change(screen.getByPlaceholderText("Student ID"), {
      target: { value: "12345" }
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" }
    });

    const createButton = screen.getByText("Create Account");
    fireEvent.click(createButton);
    expect(window.alert).toHaveBeenCalledWith("Please enter a valid email address.");
  });

  test("학번이 숫자가 아닐 경우 경고창 표시", () => {
    render(<CreateAccount />);
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "John" }
    });
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Doe" }
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john.doe@example.com" }
    });
    fireEvent.change(screen.getByPlaceholderText("Student ID"), {
      target: { value: "ABC123" } // 숫자가 아닌 값
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" }
    });

    const createButton = screen.getByText("Create Account");
    fireEvent.click(createButton);
    expect(window.alert).toHaveBeenCalledWith("Student ID must be numeric.");
  });

  test("유효한 입력 시 계정 생성 성공 알림 및 필드 초기화", () => {
    render(<CreateAccount />);
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "John" }
    });
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Doe" }
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john.doe@example.com" }
    });
    fireEvent.change(screen.getByPlaceholderText("Student ID"), {
      target: { value: "123456" }
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" }
    });

    const createButton = screen.getByText("Create Account");
    fireEvent.click(createButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Account created successfully!\nName: John Doe\nEmail: john.doe@example.com\nStudent ID: 123456"
    );

    // 인풋 값이 초기화되었는지 확인
    expect(screen.getByPlaceholderText("First Name").value).toBe("");
    expect(screen.getByPlaceholderText("Last Name").value).toBe("");
    expect(screen.getByPlaceholderText("Email").value).toBe("");
    expect(screen.getByPlaceholderText("Student ID").value).toBe("");
    expect(screen.getByPlaceholderText("Password").value).toBe("");
  });
});
