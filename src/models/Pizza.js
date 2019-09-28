const { Model } = require('objection');

class Pizza extends Model {
  static get tableName() {
    return 'pizzas';
  }
}

module.exports = Pizza;
