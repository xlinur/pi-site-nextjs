import sgMail from '@sendgrid/mail';
import fetchWrapper from '../app/utils/fetchWrapper';

/**
 * @param {string} data.templateName templateName
 * @param {string} data.message message
 * @param {dynamicTemplateData} data.dynamicTemplateData dynamicTemplateData
 * @returns {Promise<void>}
 */
export async function sendEmailIndividualReport(data) {
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
    templateId: 'd-e3e5956cf63a445aa7893cb7dd725168',
    dynamicTemplateData: data.dynamicTemplateData,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    // console.log(error.response.body);
    console.log('sendEmail() ', error);
  }
}

/**
 * @typedef {Object} dynamicTemplateData
 * @property {string} name
 * @property {string} email
 * @property {string} comment
 */
