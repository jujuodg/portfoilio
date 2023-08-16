/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, //to be able to pass formData in the contact section
  },
};

module.exports = nextConfig;
