const DiarioPost = require('../models/DiarioPost');

module.exports = async (req, res) => {
  const usernotes = req.session.userId;
  const diarioposts = await DiarioPost.find({ userid: usernotes });
  console.log(req.params.id);
  res.render('posts', { diarioposts });
};
