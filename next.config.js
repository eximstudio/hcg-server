module.exports = {
  async headers() {
    return [
      {
        source: "/api",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://object3d.netlify.app/",
        permanent: true,
      },
    ];
  },
};
