/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  images: {
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.media.strapiapp.com',
        port: '',
      },
      {
        protocol: 'http', // так как используется локальный Nginx
        hostname: 'localhost',
        port: '8089', // порт, который используется Nginx
      },
      {
        protocol: 'http', // так как используется локальный Nginx
        hostname: 'localhost',
        port: '1337', // порт, который используется Nginx
      },
    ],
  },
};

export default nextConfig;
