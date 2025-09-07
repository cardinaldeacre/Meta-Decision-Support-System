require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: 'mysql2',
		connection: {
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'meta_dss',
			port: 3306,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './migrations',
		},
	},

	production: {
		client: 'mysql2',
		connection: {
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'meta_dss',
			port: 3306,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './migrations',
		},
	},
};
