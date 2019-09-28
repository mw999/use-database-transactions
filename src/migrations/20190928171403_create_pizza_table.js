exports.up = knex => {
  return knex.schema.createTable('pizzas', table => {
    table.increments('id');
    table.string('name', 255);
    table.timestamps();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('pizzas');
};
