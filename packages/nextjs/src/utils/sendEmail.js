const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

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
    await fetch('api/email', {
      method: 'post',
      body: JSON.stringify({ emailTemplate, payload }),
      headers,
    });
  } else {
    throw Error('Failed to verify via recaptcha');
  }
};
