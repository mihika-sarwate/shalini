/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: '/shalini', // Repository name
    assetPrefix: '/shalini/', // Ensure assets load correctly
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
