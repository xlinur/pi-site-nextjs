import { NextResponse } from 'next/server';

const mock = {
  vacancies: [
    {
      id: '9151f21f-43ae-43b4-92f3-f4af67cdf544',
      title: 'Teamlead C++',
      location: 'Remote',
      type: 'Full Time',
    },
  ],
  totalCount: 245,
  totalPages: 25,
  currentPage: 1,
};

export const GET = async () => {
  return NextResponse.json(mock);
};
