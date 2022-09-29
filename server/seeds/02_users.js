/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Russell Annis', password: '1234', rank: 'E4'},
    {id: 2, name: 'Heath McGraw', password: '1234', rank: 'E7'}, 
    {id: 3, name: 'Justin Hernandez', password: '1234', rank: 'E6'},
    {id: 4, name: 'Tristan Hicks', password: '1234', rank: 'E3'},
    {id: 5, name: 'Michel Alam', password: '1234', rank: 'E4'},
    {id: 6, name: 'Joe Rogan', password: '1234', rank: 'O6'}
  ]);
};
