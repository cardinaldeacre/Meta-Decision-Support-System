/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
	const exist = await knex.schema.hasTable('scores');
	if (!exist) {
		return knex.schema.createTable('scores', table => {
			table.increments('id').primary();
			table.double('score').notNullable();
			table.integer('alternative_id').unsigned().notNullable();
			table.integer('criteria_id').unsigned().notNullable();
			table.integer('case_id').unsigned().notNullable();
			table.timestamps(true, true);
			// FK
			table.foreign('alternative_id').references('id').inTable('alternatives').onDelete('CASCADE');
			table.foreign('criteria_id').references('id').inTable('criteria').onDelete('CASCADE');
			table.foreign('case_id').references('id').inTable('cases').onDelete('CASCADE');
		});
	}
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTableIfExists('scores');
};
