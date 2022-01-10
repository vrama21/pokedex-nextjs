module.exports = ({
  swcMinify: true,
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: { disableStaticImages: true, domains: ['raw.githubusercontent.com', 'img.pokemondb.net'] },
});
