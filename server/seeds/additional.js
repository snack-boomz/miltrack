/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('additional').del()
  await knex('additional').insert([
    {id: 1, additional_name: 'EFMP', users_id: 1},
    {id: 3, additional_name: 'EFMP', users_id: 2},
    {id: 4, additional_name: 'Weapons_Qual', users_id:3}
  ]);
};
