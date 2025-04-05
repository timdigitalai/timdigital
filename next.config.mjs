/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.pravatar.cc'], // Allowed external image domain
  },
};

export default nextConfig;
