const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

module.exports = knex => {
	// get all users
	router.get('/', async (req, res) => {
		try {
			const users = await knex('users').select('*');
			res.json(users);
		} catch (error) {
			res.status(500).json({error: 'failed to get users'});
		}
	});

	// get user by id
	router.get('/id', async (req, res) => {
		try {
			const user = await knex('users').where({id: req.params.id}).first();
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({message: 'user not found'});
			}
		} catch (err) {
			res.status(500).json({error: err.message});
		}
	});

	// create user
	router.post('/', async (req, res) => {
		try {
			const [id] = await knex('users').insert(req.body);
			res.status(201).json({id, ...req.body});
		} catch (err) {
			res.status(500).json({error: err.message});
		}
	});

	// update user
	router.put('/id', async (req, res) => {
		try {
			await knex('users').where({id: req.params.id}).update(req.body);
			res.json({message: 'user updated'});
		} catch (err) {
			res.status(500).json({error: err.message});
		}
	});

	// delete user
	router.delete('/id', async (req, res) => {
		try {
			await knex('users').where({id: req.params.id}).del();
			res.json({message: 'user deleted'});
		} catch (err) {
			res.status(500).json({error: err.message});
		}
	});

	// register
	router.post('/register', UserController.register);
	// login
	router.post('/login', UserController.login);

	return router;
};
