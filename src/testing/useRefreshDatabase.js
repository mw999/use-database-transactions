const Knex = require('knex');
const { Model } = require('objection');

const defaultKnexfile = require('../knexfile');

module.exports = (testingConfig = defaultKnexfile) => {
  const knex = Knex({
    connection: {
      host: process.env.TEST_DATABASE_HOST,
      user: process.env.TEST_DATABASE_USER,
      password: process.env.TEST_DATABASE_PASSWORD,
      database: process.env.TEST_DATABASE_NAME
    },
    ...testingConfig
  });

  beforeEach(async () => {
    Model.knex(knex);
    await knex.migrate.latest();
  });

  afterEach(done => {
    knex
      .raw('SET foreign_key_checks = 0;')
      .then(() => knex.migrate.rollback({}, true))
      .then(() => knex.raw('SET foreign_key_checks = 1;'))
      .then(() => {
        knex.destroy();
        done();
      });
  });

  return knex;
};
