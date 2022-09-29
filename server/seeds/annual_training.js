/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('annual_training').del()
  await knex('annual_training').insert([
    {id: 1, training_name: 'rowValue1', training_date:'2013-10-03',users_id:1},
    {id: 2, training_name: 'rowValue2', training_date:'2013-10-03',users_id:1},
    {id: 3, training_name: 'rowValue3', training_date:'2013-10-03',users_id:1}
  ]);
};
