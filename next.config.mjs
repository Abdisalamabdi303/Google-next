/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:"flagpalette.com",
                pathname:'**',
            },
        ],
    },
};

export default nextConfig;
