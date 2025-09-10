// UserController.js
const knex = require('../config/database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// register
exports.register = async (req, res) => {
	const {username, email, password} = req.body;
	if (!username || !email || !password) {
		return res.status(400).json({message: 'all fields are required'});
	}
	try {
		const existingUser = await knex('users').where({email}).first();
		if (existingUser) {
			return res.status(400).json({message: 'email already in user'});
		}

		const hashedPassword = await bcrypt.hash(password, saltRounds);

		await knex('users').insert({
			username,
			email,
			password: hashedPassword,
		});
		res.status(201).json({message: 'user registered successfully'});
	} catch (error) {
		res.status(500).json({error: 'failed to register user'});
	}
};

// login
exports.login = async (req, res) => {
	const {email, password} = req.body;

	if (!email || !password) {
		return res.status(400).json({message: 'all fields are required'});
	}

	try {
		const user = await knex('users').where({email}).first();
		if (!user) {
			return res.status(400).json({message: 'invalid credentials'});
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (isMatch) {
			delete user.password;
			return res.status(200).json({message: 'login successful', user: user});
		} else {
			return res.status(400).json({message: 'invalid password'});
		}
	} catch (error) {
		res.status(500).json({error: 'failed to login'});
	}
};

exports.index = (req, res) => {
	res.send('User index');
};

exports.show = (req, res) => {
	const {id} = req.params;
	res.send('User show ' + id);
};

exports.create = (req, res) => {
	res.send('User create');
};

exports.update = (req, res) => {
	const {id} = req.params;
	res.send('User update ' + id);
};

exports.delete = (req, res) => {
	const {id} = req.params;
	res.send('User delete ' + id);
};
