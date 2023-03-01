module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `config`
  extends: ['@mannesmaikel/config'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
