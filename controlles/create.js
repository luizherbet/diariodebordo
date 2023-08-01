const DiarioPost = require('../models/DiarioPost');

module.exports = async (req, res) => {
  await DiarioPost.create({ ...req.body, userid: req.session.userId });
  console.log(req.body);
  res.redirect('/');
};
