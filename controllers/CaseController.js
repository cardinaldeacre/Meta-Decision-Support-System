// CaseController.js
// Generated automatically
const knex = require('../config/database');

exports.index = async (req, res) => {
	const {user_id} = req.params;
	try {
		const cases = await knex('cases')
			.where({user_id})
			.select('id', 'case_name', 'description', 'created_at');

		res.status(200).json({cases});
	} catch (error) {
		res.status(500).json({error: 'failed to get cases'});
	}
};

exports.show = async (req, res) => {
	const {id} = req.params;
	res.send('Case show ' + id);
};

exports.create = async (req, res) => {
	const {case_name, description, method_id, user_id} = req.body;

	try {
		const [caseId] = await knex('cases').insert({
			case_name,
			description,
			method_id,
			user_id,
		});

		res.status(201).json({message: 'case created', caseId: caseId});
	} catch (error) {
		res.status(500).json({error: 'failed to create case'});
	}
};

exports.update = async (req, res) => {
	const {id} = req.params;
	res.send('Case update ' + id);
};

exports.delete = async (req, res) => {
	const {id} = req.params;
	res.send('Case delete ' + id);
};
