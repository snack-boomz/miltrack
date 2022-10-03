/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username:'snackboomz', name: 'Russell Annis', password: '1234', rank: 'E4',supervisor_id:null,organization_id:1 },
    {id: 2, username:'Heath_McGraw',name: 'Heath McGraw', password: '1234', rank: 'E7',supervisor_id:null,organization_id:2}, 
    {id: 3, username:'spoonbillpaver',name: 'Justin Hernandez', password: '1234', rank: 'E6',supervisor_id:null,organization_id:3},
    {id: 4, username:'CANTfindKEYS',name: 'Tristan Hicks', password: '1234', rank: 'E3',supervisor_id:null,organization_id:1},
    {id: 5, username:'keelsonwhimsical',name: 'Michel Alam', password: '1234', rank: 'E4',supervisor_id:null,organization_id:2},
    {id: 6, username:'ocelottip',name: 'Joe Rogan', password: '1234', rank: 'O6',supervisor_id:1,organization_id:3}
  ]);
};
