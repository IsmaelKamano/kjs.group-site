/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // Autorise Unsplash pour toutes les images en ligne
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
