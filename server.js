const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;
// middleware
app.use(express.json());
app.use(cors()); // cross-origin resource sharing (frontend-backend communication)

// endpoints
app.get('/', (req, res) => {
	res.send('Backend is running');
});

// run server
app.listen(PORT, () => {
	console.log('Server is running at http://localhost:' + PORT);
});
