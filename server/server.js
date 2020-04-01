'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/users');

const app = express();
app.use(bodyParser.json());

// For Creat a new todo
app.post('/todos', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, e => res.status(400).send(e));
});

app.listen(3000, () => console.log('Server is running on port 3000'));