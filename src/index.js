const testing = require('./testing/index');
const models = require('./models/index');

module.exports = {
  ...models,
  ...testing
};
