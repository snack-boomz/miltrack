/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('static_skills').del()
  await knex('static_skills').insert([
    {id: 1, skill_name: 'Knowledge Management Professional', users_id:1},
    {id: 2, skill_name: 'Air Assault', users_id:2},
    {id: 3, skill_name: 'Euphonium Player', users_id:3},
    {id: 4, skill_name: 'Tuba Player', users_id:3}
  ]);
};
