/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["i.annihil.us"],
  },
  env: {
    ENDPOINT: process.env.ENDPOINT,
    API_KEY: process.env.API_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },
};
