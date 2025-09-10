/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
	const exist = await knex.schema.hasTable('altenatives');
	if (!exist) {
		return knex.schema.createTable('alternatives', table => {
			table.increments('id').primary();
			table.string('alternative_name', 255).notNullable();
			table.integer('case_id').unsigned().notNullable();
			table.timestamps(true, true);
			// FK
			table.foreign('case_id').references('id').inTable('cases').onDelete('CASCADE');
		});
	}
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTableIfExists('alternatives');
};
