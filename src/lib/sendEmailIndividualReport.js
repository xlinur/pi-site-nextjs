import sgMail from '@sendgrid/mail';

/**
 * @param {string} data.to to
 * @param {string} data.templateName templateName
 * @param {string} data.message message
 * @param {dynamicTemplateData} data.dynamicTemplateData dynamicTemplateData
 * @returns {Promise<void>}
 */
export async function sendEmailIndividualReport(data) {
  sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY);
  console.log({ data: data });
  const msg = {
    to: data.to,
    // TODO: change from email strapi
    from: 'rgba.panda@gmail.com',
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
