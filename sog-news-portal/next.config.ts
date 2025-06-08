import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'ichef.bbci.co.uk',
      'media.zenfs.com',
    ], // add more domains if needed
  },
};

export default nextConfig;
