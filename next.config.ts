import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aktifkan static export (penting untuk GitHub Pages)
  output: "export",

  // Kalau pakai next/image, tambahkan ini biar gak error di export
  images: {
    unoptimized: true,
  },

  // Opsional: kalau project kamu di subfolder (misal kaisan2)
  // uncomment baris ini dan sesuaikan dengan nama repo kamu
  // basePath: "/kaisan2",
  // assetPrefix: "/kaisan2/",
};

export default nextConfig;