import { NextResponse } from 'next/server';
import { sendEmailWithCV } from '../../../lib/sendEmailWithCV';

const mock = {
  data: [
    {
      id: '9151f21f-43ae-43b4-92f3-f4af67cdf544',
      title: 'Teamlead C++',
      location: 'Remote',
      type: 'Full Time',
    },
    {
      id: '9151f21f-43ae-43b4-92f3-f4af67cdf544',
      title: 'Teamlead C++',
      location: 'Remote',
      type: 'Full Time',
    },
    {
      id: '9151f21f-43ae-43b4-92f3-f4af67cdf544',
      title: 'Teamlead C++',
      location: 'Remote',
      type: 'Full Time',
    },
    {
      id: '9151f21f-43ae-43b4-92f3-f4af67cdf544',
      title: 'Teamlead C++',
      location: 'Remote',
      type: 'Full Time',
    },
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

export async function POST(req, _) {
  console.log(43);
  try {
    /**
     * typedef {Object} FormData
     * @property {string} email
     * @property {string} name
     * @property {string} position
     * @property {string} skills
     * @property {{name:string,type:string,content:string}[]} attachments
     */
    const jsonPostData = await req.json();
    console.log({ jsonPostData: jsonPostData });

    await sendEmailWithCV({
      to: 'rgba.panda@gmail.com',
      templateName: 'CVSubmission',
      dynamicTemplateData: {
        email: jsonPostData.payload.email,
        name: jsonPostData.payload.name,
        _position: jsonPostData.payload.position,
        skills: jsonPostData.payload.skills,
      },
      attachments: jsonPostData.payload.attachments.map(
        ({ content, filename, type }) => {
          return {
            content: content,
            filename: filename,
            type: type,
            disposition: 'attachment',
          };
        },
      ),
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    // console.log(error.response.body.errors[0])

    return NextResponse.json({
      success: 42,
    });
  }
}