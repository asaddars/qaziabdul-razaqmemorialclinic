/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'picsum.photos', 'i.ibb.co.com', 'i.ibb.co'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig