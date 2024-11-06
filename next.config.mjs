/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'strapi-kb-cloudkilat.s3.ap-southeast-1.amazonaws.com',
            port: '',
            pathname: '/*',
          },
        ],
      },
};

export default nextConfig;
