import { NextResponse } from 'next/server';

const mock = {
  filters: [
    {
      id: 2,
      title: 'Choose type of employment',
      type: 'list',
      values: ['All', 'Gambling', 'Fintech', 'Blockchain', 'SaaS'],
    },
    {
      id: 3,
      title: 'Choose location',
      type: 'list',
      values: ['Full-time', 'Flexible', 'Full day', 'Shift work', 'Part time'],
    },
    {
      id: 4,
      title: 'Choose the country',
      type: 'list',
      values: ['No matter', 'Country'],
    },
    {
      id: 5,
      title: 'Second filter',
      type: 'boolean',
    },
    // {
    //   id: 1,
    //   name: 'Choose the vacancy',
    //   type: 'group-list',
    //   values: [
    //     {
    //       groupName: 'Python Developer',
    //       items: ['QA Mobile', 'Java Developer'],
    //     },
    //     {
    //       groupName: 'Delivery manager',
    //       items: ['FB Ads Manager', 'Design'],
    //     },
    //   ],
    // },
  ],
};

export const GET = async () => {
  return NextResponse.json(mock);
};
