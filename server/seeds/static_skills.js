/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('static_skills').del()
  await knex('static_skills').insert([
    {id: 1, skill_name: 'rowValue1', users_id:1},
    {id: 2, skill_name: 'rowValue2', users_id:1},
    {id: 3, skill_name: 'rowValue3', users_id:1}
  ]);
};
