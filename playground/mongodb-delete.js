'use strict';

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');


	// Those r the methods used to delete data from mongodb database
	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat dinner'}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat dinner'}).then(result => console.log(result));
	
	//findOneAndDelete
	db.collection('Todos').findOneAndDelete({text: 'Eat dinner'}).then(result => console.log(result));

	// client.close();
});