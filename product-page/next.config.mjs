/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enable the App Router
  },
  distDir: 'out', // Specify the output directory for builds
};

export default nextConfig;
