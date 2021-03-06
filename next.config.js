const withPlugins = require('next-compose-plugins')
const pwa = require('next-pwa')

module.exports = withPlugins([
  pwa({
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
  }),
])
