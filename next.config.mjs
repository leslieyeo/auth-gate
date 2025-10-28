/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 启用静态导出，用于 GitHub Pages
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // leslieyeo.github.io 是用户名仓库，无需设置 basePath
  // 如果改为其他仓库名（如 auth-gate），需取消注释下面一行：
  // basePath: '/auth-gate',
}

export default nextConfig
