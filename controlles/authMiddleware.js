const User = require('../models/User');

module.exports = async (req, res, next) => {
  const userSession = await User.findById(req.session.userId);
  if (!userSession) {
    res.redirect('/');
  }
  next();
};
