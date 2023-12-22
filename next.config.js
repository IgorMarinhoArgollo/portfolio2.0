module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/pages/:path*',
      },
    ];
  },
  
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400', // Ajuste o valor do cache conforme necessário
          },
        ],
      },
    ];
  },
};
