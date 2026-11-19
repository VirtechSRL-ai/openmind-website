import { discoveryLinks } from "./lib/discovery.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: "/", headers: [{ key: "Link", value: discoveryLinks }] }];
  },
};

export default nextConfig;
