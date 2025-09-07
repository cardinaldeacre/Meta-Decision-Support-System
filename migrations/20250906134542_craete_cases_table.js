/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
	const exist = await knex.schema.hasTable('cases');
	if (!exist) {
		return knex.schema.createTable('cases', table => {
			table.increments('id').primary(); // PK
			table.integer('user_id').unsigned().notNullable(); // FK user
			table.integer('method_id').unsigned().notNullable(); // FK method
			table.string('case_name', 255).notNullable();
			table.text('description');
			table.timestamps(true, true);

			// Foreign Key
			table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
			table.foreign('method_id').references('id').inTable('methods').onDelete('CASCADE');
		});
	}
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTableIfExists('cases');
};
