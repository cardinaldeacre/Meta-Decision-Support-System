// UserController.js
// Generated automatically

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
