/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username:'snackboomz', name: 'Russell Annis', password: '1234', rank: 'E4',supervisor_id:null,organization_id:1, MOS:'17C' },
    {username:'Heath_McGraw',name: 'Heath McGraw', password: '1234', rank: 'E7',supervisor_id:null,organization_id:2, MOS:'37F'}, 
    {username:'spoonbillpaver',name: 'Justin Hernandez', password: '1234', rank: 'E6',supervisor_id:null,organization_id:3, MOS:'18C'},
    {username:'CANTfindKEYS',name: 'Tristan Hicks', password: '1234', rank: 'E3',supervisor_id:null,organization_id:1, MOS:'1D751Z'},
    {username:'keelsonwhimsical',name: 'Michel Alam', password: '1234', rank: 'E4',supervisor_id:null,organization_id:2, MOS:'25U'},
    {username:'ocelottip',name: 'Joe Rogan', password: '1234', rank: 'O6',supervisor_id:1,organization_id:3, MOS:'35F'}
  ]);
};
