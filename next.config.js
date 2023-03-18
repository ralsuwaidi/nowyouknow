/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'url',
    limit: 8192, // 8kb
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      }
    ],
  },
}
