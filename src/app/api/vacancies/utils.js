import { NextResponse } from 'next/server';
import qs from 'qs';

export const request = async (path, params) => {
  try {
    const url = new URL(path, process.env.NEXT_VACANCIES_API);

    if (params) {
      url.search = qs.stringify(params);
    }

    const res = await fetch(url.href);
    const json = await res.json();

    return NextResponse.json({
      success: true,
      data: json,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err,
    });
  }
};
