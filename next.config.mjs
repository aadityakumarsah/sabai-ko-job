/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "randomuser.me",
          },
        ],
        serverComponentsExternalPackages: ['@prisma/client', 'lucia'],
    },
};

export default nextConfig;
