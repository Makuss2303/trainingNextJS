/** @type {import('next').NextConfig} */
const globImporter = require('node-sass-glob-importer');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    importer: globImporter(),
  },
}

module.exports = nextConfig
