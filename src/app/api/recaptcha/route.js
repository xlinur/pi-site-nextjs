import { NextResponse } from 'next/server';

export async function POST(req, _) {
  try {
    const secretKey = process.env.NEXT_PRIVATE_RECAPTCHA_SECRET_KEY;

    const jsonPostData = await req.json();

    const { gRecaptchaToken } = jsonPostData;
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

    const responseResult = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    const responseResultJson = await responseResult.json();

    if (
      responseResultJson &&
      responseResultJson.success &&
      responseResultJson.score > 0.5
    ) {
      return NextResponse.json({
        success: true,
        score: responseResultJson.score,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log('Post() => catch', error);

    return NextResponse.json({
      success: false,
    });
  }
}
