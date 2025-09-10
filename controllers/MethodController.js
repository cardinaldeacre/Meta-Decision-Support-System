// MethodController.js
// Generated automatically
const knex = require('../config/database');

exports.index = async (req, res) => {
	try {
		const methods = await knex('methods').select('*');
		res.status(200).json({methods});
	} catch (error) {
		res.status(500).json({error: 'failed to get methods'});
	}
};

exports.show = async (req, res) => {
	const {id} = req.params;
	res.send('Method show ' + id);
};

exports.create = async (req, res) => {
	const {methods_name, description} = req.body;

	try {
		const [id] = await knex('methods').insert({methods_name, description});
	} catch (error) {
		return res.status(500).json({error: 'failed to create method'});
	}
};

exports.update = async (req, res) => {
	const {id} = req.params;
	res.send('Method update ' + id);
};

exports.delete = async (req, res) => {
	const {id} = req.params;
	res.send('Method delete ' + id);
};
