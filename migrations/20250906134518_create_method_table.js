/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
	const exists = await knex.schema.hasTable('methods');
	if (!exists) {
		return knex.schema.createTable('methods', table => {
			table.increments('id').primary();
			table.string('method_name', 255).notNullable();
			table.text('description');
			table.timestamps(true, true);
		});
	}
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTable('methods');
};
