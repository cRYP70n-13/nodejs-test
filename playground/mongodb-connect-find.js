'use strict';

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Users').insertOne({
	// 	name: 'Otmane Kimdil',
	// 	age: 19,
	// 	job: 'Software developer'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to connect to db', err);
	// 	}
	// 	console.log(JSON.stringify(result, undefined, 2));
	// });

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5e8221529a41ba365371e63c')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, err => console.log('Unable to fetch documents', err));

	db.collection('Users').find({name: 'Otmane Kimdil'}).count().then((count) => {
		console.log(`Todos count ${count}`);
		// console.log(JSON.stringify(docs, undefined, 2));
	}, err => console.log('Unable to fetch documents', err));

	// db.collection('Users').find().toArray().then((docs) => {
	// 	console.log(`Users`);
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, err => console.log('Unable to fetch Documents', err));

	// client.close();
});