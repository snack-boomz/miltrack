/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username:'snackboomz', name: 'Russell Annis', password: '1234', rank: 'E4',supervisor_id:6,organization_id:1, MOS:'17C', current_status: 'PDY' },
    {id: 2, username:'Heath_McGraw',name: 'Heath McGraw', password: '1234', rank: 'E7',supervisor_id:6,organization_id:2, MOS:'37F', current_status: 'TDY'}, 
    {id: 3, username:'spoonbillpaver',name: 'Justin Hernandez', password: '1234', rank: 'E6',supervisor_id:6,organization_id:3, MOS:'18C', current_status: 'leave'},
    {id: 4, username:'CANTfindKEYS',name: 'Tristan Hicks', password: '1234', rank: 'E3',supervisor_id:6,organization_id:1, MOS:'1D751Z', current_status: 'PDY'},
    {id: 5, username:'keelsonwhimsical',name: 'Michel Alam', password: '1234', rank: 'E4',supervisor_id:6,organization_id:2, MOS:'25U', current_status: 'TDY'},
    {id: 6, username:'ocelottip',name: 'Joe Rogan', password: '1234', rank: 'O6',supervisor_id:null,organization_id:3, MOS:'35F', current_status: 'PDY'}
  ]);
};
