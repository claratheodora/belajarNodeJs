const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('We are on home');
});

//Inport Routes
const userRoute = require('./routes/user');

app.use('/user', userRoute);

app.listen(3000);


mongoose.connect(process.env.DB_CONNECTION, 
	{ useNewUrlParser: true }, () => {
	console.log('Connected to DB');
});