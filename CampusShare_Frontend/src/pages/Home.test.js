import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("Home Component", () => {
  test("홈 페이지 heading이 렌더링되는지 확인", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const mainHeading = screen.getByText("Welcome to CampusShare!");
    expect(mainHeading).toBeInTheDocument();
  });

  test("Popular Posts 섹션과 mock 데이터가 렌더링되는지 확인", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Popular Posts 섹션 헤딩 체크
    const popularPostsHeading = screen.getByText("Popular Posts");
    expect(popularPostsHeading).toBeInTheDocument();

    // mock 데이터 확인
    const mockPostTitles = [
      "How to improve your writing skills",
      "I think Josué is the best professor",
      "Understanding Calculus: Tips and Tricks",
      "Best practices for effective teamwork",
      "Exploring data structures in Python",
    ];

    for (const title of mockPostTitles) {
      const postItem = await screen.findByText(title);
      expect(postItem).toBeInTheDocument();
    }
  });

  test("'View All Popular Posts' 링크가 존재하는지 확인", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const viewAllLink = screen.getByText("View All Popular Posts");
    expect(viewAllLink).toBeInTheDocument();
    expect(viewAllLink.getAttribute("href")).toBe("/popular-posts");
  });

  test("'View Rankings' 링크가 존재하는지 확인", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const viewRankingsLink = screen.getByText("View Rankings");
    expect(viewRankingsLink).toBeInTheDocument();
    expect(viewRankingsLink.getAttribute("href")).toBe("/ranking");
  });
});
