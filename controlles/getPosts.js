const DiarioPost = require('../models/DiarioPost');

module.exports = async (req, res) => {
  const diarioposts = await DiarioPost.find({}).populate('userid');
  console.log(req.params.id);
  res.render('posts', { diarioposts });
};
