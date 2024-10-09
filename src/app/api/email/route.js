import { NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/sendEmail';

export async function POST(req, _) {
  try {
    /**
     * typedef {Object}
     * @property {payload.string} email
     * @property {payload.string} name
     * @property {payload.string} company
     * @property {payload.string} service
     * @property {payload.string} contactPreference
     * @property {payload.string} comment
     */
    const jsonPostData = await req.json();

    await sendEmail({
      templateName: 'ContactSubmission',
      dynamicTemplateData: {
        name: jsonPostData.payload.name,
        email: jsonPostData.payload.email,
        service: jsonPostData.payload.service,
        comment: jsonPostData.payload.comment,
        contact: jsonPostData.payload.contact,
        contactPreference: jsonPostData.payload.contactPreference,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
    });
  }
}
