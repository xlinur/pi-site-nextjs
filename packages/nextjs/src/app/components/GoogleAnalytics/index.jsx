import Script from 'next/script';

const GoogleAnalytics = () => {
  const publicGaId = process.env.NEXT_PUBLIC_GA_ID ?? undefined;

  if (process.env.NODE_ENV !== 'production' || !publicGaId) return null;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${publicGaId}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${publicGaId});
      `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
