import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Board from "../pages/Board";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(() => jest.fn()),
}));

describe("Board Component", () => {
  test("renders the correct heading", () => {
    render(
      <MemoryRouter>
        <Board coursesData={["Course 1", "Course 2"]} />
      </MemoryRouter>
    );

    expect(screen.getByText((content) => content.includes("Posts for Grade"))).toBeInTheDocument();
  });

  test("filters posts when a filter button is clicked", () => {
    render(
      <MemoryRouter>
        <Board coursesData={["Course 1", "Course 2"]} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/Course 1/i));

    // 게시물 필터링 확인
    expect(screen.getByText(/Course 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Course 2 - Homework/i)).not.toBeInTheDocument();
  });

  test("shows all posts when 'Show All' is clicked", () => {
    render(
      <MemoryRouter>
        <Board coursesData={["Course 1", "Course 2"]} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/Show All/i));

    // 모든 게시물이 다시 보이는지 확인
    expect(screen.getByText(/Course 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Course 2/i)).toBeInTheDocument();
  });

  //강의평가 부분을 추가한 이후 유닛테스트
  test("displays reviews when a course is selected", () => {
    const mockReviews = {
      "Course 1": [
        { id: 1, review: "Great course! ★★★★★" },
        { id: 2, review: "Very informative. ★★★★" },
      ],
    };

    render(
      <MemoryRouter>
        <Board coursesData={["Course 1", "Course 2"]} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/Course 1/i));

    // 리뷰 섹션 확인
    expect(screen.getByText("Reviews for Course 1")).toBeInTheDocument();
    expect(screen.getByText("Great course! ★★★★★")).toBeInTheDocument();
    expect(screen.getByText("Very informative. ★★★★")).toBeInTheDocument();
  });

  test("displays 'No reviews available' if no reviews exist for selected course", () => {
    const mockReviews = {};

    render(
      <MemoryRouter>
        <Board coursesData={["Course 1", "Course 2"]} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/Course 2/i));

    // 리뷰가 없을 경우 "No reviews available" 메시지 확인
    expect(screen.getByText("No reviews available for this course.")).toBeInTheDocument();
  });



});
