const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	id : {
		type : String,
		required: true
	},
	nama : {
		type : String,
		required: true
	},
	date: {
		type : Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', UserSchema);