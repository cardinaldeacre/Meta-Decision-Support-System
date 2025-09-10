/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
	const exist = await knex.schema.hasTable('criteria');
	if (!exist) {
		return knex.schema.createTable('criteria', table => {
			table.increments('id').primary(); // PK
			table.integer('case_id').unsigned().notNullable();
			table.string('criteria_name', 255).notNullable();
			table.double('weight').notNullable();
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
	return knex.schema.dropTableIfExists('criteria');
};
