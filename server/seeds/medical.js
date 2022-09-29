/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('medical').del()
  await knex('medical').insert([
    {id: 1, pha_date: '2013-10-03', dental_date:'2013-10-03', hearing_date:'2013-10-03', users_id:1},
    {id: 2, pha_date: '2013-10-03', dental_date:'2013-10-03', hearing_date:'2013-10-03', users_id:1},
    {id: 3, pha_date: '2013-10-03', dental_date:'2013-10-03', hearing_date:'2013-10-03', users_id:1}
  ]);
};
