const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiarioPostSchema = new Schema({
  titulo: String,
  nota: String,
  keys: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // referencia a outra colecao
    required: true,
  },
});

const DiarioPost = mongoose.model('DiarioPost', DiarioPostSchema);

module.exports = DiarioPost;
