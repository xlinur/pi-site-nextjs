import { NextResponse } from 'next/server';

const mock = {
  filters: [
    {
      title: 'This is first filter name',
      type: 'list',
      values: ['Remote', 'Office'],
    },
    {
      title: 'Second filter',
      type: 'boolean',
      values: [true, false],
    },
  ],
};

export const GET = async () => {
  return NextResponse.json(mock);
};
