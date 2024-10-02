import sgMail from '@sendgrid/mail';

/**
 * @param {string} data.to to
 * @param {string} data.templateName templateName
 * @param {string} data.message message
 * @param {dynamicTemplateData} data.dynamicTemplateData dynamicTemplateData
 * @returns {Promise<void>}
 */
export async function sendEmail(data) {
  sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY);
  console.log({ data: data });
  const msg = {
    to: data.to,
    // TODO: change from email strapi
    from: 'rgba.panda@gmail.com',
    subject: 'Test subject',
    text: data.message,
    templateId: 'd-a47d7ce88a4b415d9cedc799fc08ed97',
    dynamicTemplateData: data.dynamicTemplateData,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log('sendEmail() ', error);
  }
}

/**
 * @typedef {Object} dynamicTemplateData
 * @property {string} name
 * @property {string} email
 * @property {string} comment
 */
