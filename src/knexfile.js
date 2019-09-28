module.exports = {
  client: 'mysql2',
  migrations: {
    directory: `${__dirname}/migrations`
  },
  seeds: {
    directory: `${__dirname}/seeds`
  }
};
