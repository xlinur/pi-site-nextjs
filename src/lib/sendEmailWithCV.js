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
    to: 'resume@personalinvest.org',
    from: 'resume@personalinvest.org',
    subject: 'PersonalInvest.org - Message from CV form',
    text: data.message,
    templateId: 'd-feaab77cb5da4988bf934f2a82a6b52b',
    dynamicTemplateData: data.dynamicTemplateData,
    attachments: data.attachments,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    console.log('sendEmail() ', error, error.response.body.errors);
  }
}
