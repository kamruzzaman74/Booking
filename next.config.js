/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      domains: [], // Add any other domains you want to allow
      loader: 'default',
      path: '/_next/image',
      remotePatterns: [
        {
          // Example 1: If your image URLs look like "https://cf.bstatic.com/images/foo.jpg"
          hostname: 'cf.bstatic.com',
        },
        {
          // Example 2: If your image URLs look like "https://r-xx.bstatic.com/images/bar.jpg"
          hostname: 'r-xx.bstatic.com',
        },
        // Add more patterns as needed
      ],
    },
  };
  