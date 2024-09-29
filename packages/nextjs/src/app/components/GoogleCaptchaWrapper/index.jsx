import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export const RECAPTCHA_KEY_MSG = 'NO RECAPTCHA KEY';

export default function GoogleCaptchaWrapper({ children }) {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? undefined;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey ?? RECAPTCHA_KEY_MSG}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
