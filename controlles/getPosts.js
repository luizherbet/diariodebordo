const DiarioPost = require('../models/DiarioPost');

module.exports = async (req, res) => {
  const diarioposts = await DiarioPost.find({ userid: usernotes });
  console.log(req.params.id);
  res.render('posts', { diarioposts });
};
