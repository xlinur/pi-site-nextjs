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
    to: 'consulting@personalinvest.org',
    from: 'consulting@personalinvest.org',
    subject: 'PersonalInvest.org - Report Request',
    text: data.message,
    templateId: 'd-8169bad3db034ab8b65312f102ae2b02',
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
