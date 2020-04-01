'use strict';

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// Statements Used to update data in our database
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5e8235012400024a3851dd9b')
	}, {
		//this is the update that we gonna make
		$set: {
			name: 'cRYP70N_modified'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then(result => console.log(result));


	// client.close();
});