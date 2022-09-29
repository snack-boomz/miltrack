/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('organization').del()
  await knex('organization').insert([
    {id: 1, organization_name: 'rowValue1'},
    {id: 2, organization_name: 'rowValue2'},
    {id: 3, organization_name: 'rowValue3'}
  ]);
};
