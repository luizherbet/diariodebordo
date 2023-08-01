const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  usuario: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function (next) {
  const user = this;

  bcrypt.hash(user.senha, 10, (error, hash) => {
    user.senha = hash;
    next();
  });
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
