const express = require('express');
const cors = require('cors');
const knex = require('./config/database');
const userRoutes = require('./routes/users')(knex);
const caseRoutes = require('./routes/cases')(knex);

const app = express();
const port = 3000;
// middleware
app.use(express.json());
// cross-origin resource sharing (frontend-backend communication)
app.use(cors());

// endpoints
app.get('/', (req, res) => {
	res.send('Backend is running');
});

// run server
app.listen(port, () => {
	console.log('Server is running at http://localhost:' + port);
});

// connect Routes / API
app.use('/api/users', userRoutes);
app.use('/api/cases', caseRoutes);
app.use('/api/methods', require('./routes/methods'));
