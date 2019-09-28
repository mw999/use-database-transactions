const Knex = require('knex');
const { transaction, Model } = require('objection');

const defaultKnexfile = require('../knexfile');

module.exports = (testingConfig = defaultKnexfile) => {
  let trx;
  let knex;

  beforeEach(async () => {
    knex = Knex({
      connection: {
        host: process.env.TEST_DATABASE_HOST,
        user: process.env.TEST_DATABASE_USER,
        password: process.env.TEST_DATABASE_PASSWORD,
        database: process.env.TEST_DATABASE_NAME
      },
      ...testingConfig
    });
    trx = await transaction.start(knex);
    Model.knex(trx);
  });

  afterEach(async () => {
    await trx.rollback();
    await knex.destroy();
  });

  return [knex, trx];
};
