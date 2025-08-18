// import type { NextConfig } from "next";
/** @type {import {'next'}.NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  base: "/zirectlabel",
  assetPrefix: "/zirectlabel",

};

module.exports = nextConfig;
