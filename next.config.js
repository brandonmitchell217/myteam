/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    // Allow importing *.svg files as React Components (see gloo-ui/components/Icon/all.tsx)
    // If you need to load in a normal *.svg file without converting it to a React Component, set it up this way:
    // https://react-svgr.com/docs/webpack/#use-svgr-and-asset-svg-in-the-same-project
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: "@svgr/webpack", options: { dimensions: false } }],
    });

    return config;
  },
};
module.exports = nextConfig;
