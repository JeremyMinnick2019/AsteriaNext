/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Home/HomePage',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
