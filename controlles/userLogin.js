const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  const { usuario, senha } = req.body;
  const user = await User.findOne({ usuario: usuario });
  if (user) {
    bcrypt.compare(senha, user.senha, (error, same) => {
      if (same) {
        req.session.userId = user._id;
        res.redirect('/');
      }
    });
  }
};
