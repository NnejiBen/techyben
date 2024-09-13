/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
      key: 'Content-Security-Policy',
      value: `default-src 'self'; script-src 'self'; object-src 'none'; frame-ancestors 'none';`, // Customize based on your needs
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
    {
      key: 'X-Frame-Options',
      value: 'DENY',
    },
  ];
  
  const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  