/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('username');
    table.string('password');
    table.string('rank');
    table.integer('supervisor_id')
    table.integer('organization_id')
    table.foreign('organization_id').references('organization.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('users', table => {
    return table.dropForeign('organization_id');
  })
  .then(table => {
    return knex.schema.dropTableIfExists('users');
  })
};
