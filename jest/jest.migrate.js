const Knex = require('knex');

require('dotenv').config();

const defaultKnexfile = require('../src/knexfile');

(async () => {
  const knex = Knex({
    connection: {
      host: process.env.TEST_DATABASE_HOST,
      user: process.env.TEST_DATABASE_USER,
      password: process.env.TEST_DATABASE_PASSWORD,
      database: process.env.TEST_DATABASE_NAME
    },
    ...defaultKnexfile
  });

  await knex.migrate.latest();
  await knex.destroy();
})();
