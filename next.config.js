/** @type {import('next').NextConfig} */
const globImporter = require('node-sass-glob-importer');
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    importer: globImporter(),
  },
  images: {
    domains: ['bt3.test'],
  },
}

module.exports = nextConfig
