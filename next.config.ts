import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* outras opções do Next.js aqui */
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|svg)$/i,
      type: "asset/resource", // permite importar imagens direto no TS/JS
    });
    return config;
  },
};

export default nextConfig;
