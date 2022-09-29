/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('special_skills').del()
  await knex('special_skills').insert([
    {id: 1, skill_name: 'rowValue1', skill_refresh_date:'2013-10-03', users_id:1 },
    {id: 2, skill_name: 'rowValue2', skill_refresh_date:'2013-10-03', users_id:1 },
    {id: 3, skill_name: 'rowValue3', skill_refresh_date:'2013-10-03', users_id:1 }
  ]);
};
