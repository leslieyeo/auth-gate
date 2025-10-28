/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 启用静态导出，用于 GitHub Pages
  basePath: '/auth-gate', // GitHub Pages 仓库名为 auth-gate，需要设置 basePath
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
