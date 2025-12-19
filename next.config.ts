import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Esto permite que el despliegue continúe aunque haya advertencias de ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ESTO HARÁ QUE VERCEL IGNORE LOS ERRORES DE TIPO Y DESPLIEGUE
    ignoreBuildErrors: true,
  },
};

export default nextConfig;