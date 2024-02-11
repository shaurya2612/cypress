/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["yttpjfixndblgidasxyn.supabase.co"],
  },
};

module.exports = nextConfig;
