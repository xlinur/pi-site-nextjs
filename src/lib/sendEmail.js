import sgMail from '@sendgrid/mail';
import fetchWrapper from '../app/utils/fetchWrapper';

/**
 // * @param {string} data.to to
 * @param {string} data.templateName templateName
 * @param {string} data.message message
 * @param {dynamicTemplateData} data.dynamicTemplateData dynamicTemplateData
 * @returns {Promise<void>}
 */
export async function sendEmail(data) {
  const responseGlobalData = await fetchWrapper('/api/global?populate=deep');

  const {
    data: {
      attributes: { contacts },
    },
  } = responseGlobalData;

  console.log('-NEXT_SENDGRID_API_KEY>', process.env.NEXT_SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY);

  const msg = {
    to: 'consulting@personalinvest.org',
    from: 'consulting@personalinvest.org',
    subject: 'PersonalInvest.org - Message from Contact form',
    text: data.message,
    templateId: 'd-25104c27ba95427db29accaa103150ce',
    dynamicTemplateData: data.dynamicTemplateData,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log('sendEmail() ', error, error.response.body.errors);
  }
}

/**
 * @typedef {Object} dynamicTemplateData
 * @property {string} name
 * @property {string} email
 * @property {string} comment
 */
