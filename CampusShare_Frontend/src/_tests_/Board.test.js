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

    expect(screen.getByText("Posts for Grade")).toBeInTheDocument();
});
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

