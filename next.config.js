// /** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'downloads.ctfassets.net',
                port: '',
                pathname: '/**'
            },
            {
                protocol: "https",
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/**'
            }
        ],
    },
};


// export default nextConfig;

// module.exports = {
//     // images: {
//     //     remotePatterns: [
//     //         {
//     //             protocol: 'https',
//     //             hostname: 'downloads.ctfassets.net',
//     //             // port: '3000',
//     //             // pathname: '/account123/**',
//     //         },
//     //     ],
//     // },
//     images: {
//         domains: ['images.ctfassets.net'],
//     }
// }

