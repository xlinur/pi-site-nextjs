/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.media.strapiapp.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
