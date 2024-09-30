import { NextResponse } from 'next/server';

const mock = {
  filters: [
    {
      type: 'list',
      values: ['Remote', 'Office'],
    },
  ],
};

export const GET = async () => {
  return NextResponse.json(mock);
};
