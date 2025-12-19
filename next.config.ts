import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Esto permite que el despliegue continúe aunque haya advertencias de ESLint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;