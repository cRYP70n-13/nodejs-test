'use strict';

const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		reuqired: true,
		minlength: 3,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {
	Todo
}