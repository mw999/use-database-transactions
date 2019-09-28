const { Pizza, useDatabaseTransactions } = require('../src/index');

useDatabaseTransactions();

test('a pizza can be created', async () => {
  const pizza = await Pizza.query().insert({
    name: 'pepperoni'
  });

  expect(pizza).toBeTruthy();
});
