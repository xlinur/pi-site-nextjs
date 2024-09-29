import { GoogleAnalytics as NextGoogleAnalytics } from 'nextjs-google-analytics';

const GoogleAnalytics = () => {
  if (process.env.NODE_ENV !== 'production') return null;

  return <NextGoogleAnalytics />;
};

export default GoogleAnalytics;
