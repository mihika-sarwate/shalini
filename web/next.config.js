const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: isProd ? '/shalini' : '',
    assetPrefix: isProd ? '/shalini/' : '',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
