import sgMail from '@sendgrid/mail';
import fetchWrapper from '../app/utils/fetchWrapper';

/**
 * @param {string} data.templateName templateName
 * @param {string} data.message message
 * @param {string} data.dynamicTemplateData.name dynamicTemplateData
 * @param {string} data.dynamicTemplateData.email dynamicTemplateData
 * @param {string} data.dynamicTemplateData._position dynamicTemplateData
 * @param {string[]} data.dynamicTemplateData.skills dynamicTemplateData
 * @param {{name:string,type:string,content:string}[]} data.attachments attachments
 * @returns {Promise<void>}
 */
export async function sendEmailWithCV(data) {
  const responseGlobalData = await fetchWrapper('/api/global?populate=deep');

  const {
    data: {
      attributes: { contacts },
    },
  } = responseGlobalData;

  sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY);

  const msg = {
    to: contacts.email,
    from: contacts.email,
    subject: 'Test subject',
    text: data.message,
    templateId: 'd-113f990e09df4328aca2d72356411f72',
    dynamicTemplateData: data.dynamicTemplateData,
    attachments: data.attachments,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    // console.log(error.response.body);
    console.log('sendEmail() ', error);
  }
}
