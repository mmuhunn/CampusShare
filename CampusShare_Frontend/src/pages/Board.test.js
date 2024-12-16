import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Board from './Board';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';

// react-router-dom 훅 모킹
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('Board Component', () => {
  let mockNavigate;
  let mockUseLocation;

  beforeEach(() => {
    mockNavigate = jest.fn();
    mockUseLocation = {
      search: '?grade=1&semester=1'
    };
    // 모킹된 훅에 반환값 설정
    useLocation.mockReturnValue(mockUseLocation);
    useNavigate.mockReturnValue(mockNavigate);
  });

  test('주어진 학년, 학기에 맞는 게시물 렌더링 확인', () => {
    const coursesData = ['English Writing I', 'Calculus I', 'Business Information Systems'];

    render(
      <MemoryRouter>
        <Board coursesData={coursesData} />
      </MemoryRouter>
    );

    // 헤딩 확인
    expect(screen.getByRole('heading', { name: /Posts for Grade 1, Semester 1/i })).toBeInTheDocument();

    // 초기 게시물 확인
    expect(screen.getByText(/English Writing I - Assignment/i)).toBeInTheDocument();
    expect(screen.getByText(/Calculus I - Homework/i)).toBeInTheDocument();
    expect(screen.getByText(/Business Information Systems - Case Study/i)).toBeInTheDocument();
  });

  test('코스 버튼 클릭으로 필터링 기능 확인', () => {
    const coursesData = ['English Writing I', 'Calculus I', 'Business Information Systems'];

    render(
      <MemoryRouter>
        <Board coursesData={coursesData} />
      </MemoryRouter>
    );

    // 초기 상태: 모든 게시물 표시
    expect(screen.getByText(/English Writing I - Assignment/i)).toBeInTheDocument();
    expect(screen.getByText(/Calculus I - Homework/i)).toBeInTheDocument();
    expect(screen.getByText(/Business Information Systems - Case Study/i)).toBeInTheDocument();

    // "Calculus I" 버튼 클릭
    fireEvent.click(screen.getByRole('button', { name: /Calculus I/i }));

    // 필터링 확인
    expect(screen.queryByText(/English Writing I - Assignment/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Calculus I - Homework/i)).toBeInTheDocument();
    expect(screen.queryByText(/Business Information Systems - Case Study/i)).not.toBeInTheDocument();
  });

  test('Show All 버튼 클릭 시 필터 해제 확인', () => {
    const coursesData = ['English Writing I', 'Calculus I', 'Business Information Systems'];

    render(
      <MemoryRouter>
        <Board coursesData={coursesData} />
      </MemoryRouter>
    );

    // 우선 "Calculus I"로 필터
    fireEvent.click(screen.getByRole('button', { name: /Calculus I/i }));
    expect(screen.queryByText(/English Writing I - Assignment/i)).not.toBeInTheDocument();

    // Show All 버튼 클릭
    fireEvent.click(screen.getByRole('button', { name: /Show All/i }));

    // 모든 게시물 재표시 확인
    expect(screen.getByText(/English Writing I - Assignment/i)).toBeInTheDocument();
    expect(screen.getByText(/Calculus I - Homework/i)).toBeInTheDocument();
    expect(screen.getByText(/Business Information Systems - Case Study/i)).toBeInTheDocument();
  });

  test('Write 버튼 클릭 시 /newpost로 이동 확인', () => {
    const coursesData = ['English Writing I', 'Calculus I', 'Business Information Systems'];

    render(
      <MemoryRouter>
        <Board coursesData={coursesData} />
      </MemoryRouter>
    );

    const writeButton = screen.getByRole('button', { name: /Write/i });
    fireEvent.click(writeButton);
    expect(mockNavigate).toHaveBeenCalledWith('/newpost');
  });
});
