import { NextResponse } from 'next/server';

const mock = {
  id: '9151f21f-43ae-43b4-92f3-f4af67cdf544',
  title: 'Teamlead C++',
  location: 'Remote',
  type: 'Full Time',
  description: 'Lead a team of C++ developers...',
};

export const GET = async () => {
  return NextResponse.json(mock);
};
