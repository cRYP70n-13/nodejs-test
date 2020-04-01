'use strict';

const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
	name: {
		type: String,
		required: true,
		minlength: 3,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true
	}
});

module.exports = {
	Users
}