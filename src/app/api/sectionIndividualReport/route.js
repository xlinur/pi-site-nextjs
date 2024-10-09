import { NextResponse } from 'next/server';
import { sendEmailIndividualReport } from '../../../lib/sendEmailIndividualReport';

export async function POST(req, _) {
  try {
    /**
     * typedef {Object} FormData
     * @property {string} email
     * @property {string} name
     * @property {string} company
     * @property {string} services
     * @property {string} comment
     * @property {string} otherComment
     * @property {{checked: boolean, label: string}[]} purposeOfResearch
     * @property {{checked: boolean, label: string}} other
     * @property {{checked: boolean, label: string}[]} legalCheckboxes
     */
    const jsonPostData = await req.json();

    const purposeOfResearch = jsonPostData.payload.purposeOfResearch
      .filter(({ checked }) => checked === true)
      .map(({ label }) => {
        return label;
      })
      .join(',');

    await sendEmailIndividualReport({
      templateName: 'ReportSubmission',
      dynamicTemplateData: {
        name: jsonPostData.payload.name,
        email: jsonPostData.payload.contact,
        service: jsonPostData.payload.service,
        contact: jsonPostData.payload.contact,
        comment: jsonPostData.payload.comment,
        otherComment: jsonPostData.payload.otherComment,
        purposeOfResearch: purposeOfResearch,
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
