'use strict';

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	db.collection('Todos').insertOne({
		text: 'Eat dinner',
		completed: false
	}, (err, result) => {
		if (err) {
			return console.log('Unable to connect to db', err);
		}
		console.log(JSON.stringify(result, undefined, 2));
	});

	// db.collection('Todos').find({
	// 	text: 'Eat dinner'
	// }).count().then((count) => {
	// 	console.log(`there is ${count}`);
	// 	// console.log(JSON.stringify(docs, undefined, 2));
	// }, err => console.log('Unable to fetch documents', err));

	// db.collection('Users').find({name: 'Otmane Kimdil'}).count().then((count) => {
	// 	console.log(`Todos count ${count}`);
	// 	// console.log(JSON.stringify(docs, undefined, 2));
	// }, err => console.log('Unable to fetch documents', err));

	// db.collection('Users').find().toArray().then((docs) => {
	// 	console.log(`Users`);
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, err => console.log('Unable to fetch Documents', err));

	// client.close();
});