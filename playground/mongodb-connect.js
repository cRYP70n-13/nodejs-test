'use strict';

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to inset to do!!', err);
	// 	}
	//sudo mongod --dbpath /data/db --port 27018 ===> this is the command used to run mongod in my system
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Todos').insertOne({
		text: 'walk dog',
		completed: true
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert the user');
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
		console.log(result.ops[0]._id.getTimestamp());
	});

	client.close();
});