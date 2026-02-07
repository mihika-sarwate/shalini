const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/shalini' : ''

const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
