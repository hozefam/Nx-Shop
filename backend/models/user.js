const mongoose = require('mongoose');

const userSchema = mongoose.Schema({});

exports.User = mongoose.model('Users', userSchema);
