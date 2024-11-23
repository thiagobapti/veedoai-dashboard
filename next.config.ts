import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    logger: {
      warn: function (message: string) {
        if (message.includes("deprecat")) return;
        console.warn(message);
      },
      debug: function (message: string) {
        if (message.includes("deprecat")) return;
        console.log(message);
      },
    },
  },
};

export default nextConfig;
