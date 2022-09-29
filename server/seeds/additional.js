/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('additional').del()
  await knex('additional').insert([
    {id: 1, additional_name: 'rowValue1', users_id: 1},
    {id: 2, additional_name: 'rowValue2', users_id: 1},
    {id: 3, additional_name: 'rowValue3', users_id: 1}
  ]);
};
