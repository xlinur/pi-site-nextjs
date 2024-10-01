const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

export const emailExecutorUrlManager = {
  ContactSubmission: 'api/email',
  ReportSubmission: 'api/sectionIndividualReport',
};

/**
 * Call email url depends on emailTemplate.
 *
 * @param {string} gRecaptchaToken
 * @param {ContactSubmission|ReportSubmission} emailTemplate
 * @param {object} payload
 * @return {Promise<void>}
 */
export const sendEmail = async ({
  gRecaptchaToken,
  emailTemplate,
  payload,
}) => {
  const recaptchaResult = await fetch('/api/recaptcha', {
    method: 'post',
    body: JSON.stringify({
      gRecaptchaToken: gRecaptchaToken,
    }),
    headers,
  });

  const recaptchaResultJson = await recaptchaResult.json();

  if (recaptchaResultJson.success) {
    const fetchUrl = emailExecutorUrlManager[emailTemplate];

    if (!fetchUrl) {
      throw Error('Url for email is not provided');
    }

    await fetch(fetchUrl, {
      method: 'post',
      body: JSON.stringify({ emailTemplate, payload }),
      headers,
    });
  } else {
    throw Error('Failed to verify via recaptcha');
  }
};
