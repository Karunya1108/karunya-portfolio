/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: 'export', // if you're doing static export
};

module.exports = nextConfig;
