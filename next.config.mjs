

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image hosting domain
    formats: ['image/avif', 'image/webp']
},
  webpack(config) {
    return config;
  }
};

export default nextConfig;