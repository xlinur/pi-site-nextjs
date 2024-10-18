import { NextResponse } from 'next/server';
import { request } from './utils';
import { sendEmailWithCV } from '../../../lib/sendEmailWithCV';

export const GET = async (req) => {
  const { url } = req;

  const params = new URLSearchParams(url.split('?')[1]);

  const page = params.get('page');
  const pageSize = params.get('pageSize');
  const locale = params.get('locale');
  const filters = JSON.parse(params.get('filters'));

  const response = await request('/vacancies', {
    ...filters,
    page,
    pageSize,
    locale,
  });

  return response;
};

export async function POST(req, _) {
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

    await sendEmailWithCV({
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

    return NextResponse.json({
      success: 42,
    });
  }
}
