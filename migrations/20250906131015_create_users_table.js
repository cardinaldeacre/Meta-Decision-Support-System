/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
	const exists = await knex.schema.hasTable('users');
	if (!exists) {
		return knex.schema.createTable('users', table => {
			table.increments('id').primary(); // PK
			table.string('username', 255).notNullable().unique(); // varchar(255)
			table.string('email', 255).notNullable().unique(); // varchar(255)
			table.string('password', 255).notNullable(); // varchar(255)
			table.timestamps(true, true); // created_at and updated_at
		});
	}
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTableIfExists('users');
};
