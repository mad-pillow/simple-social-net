const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  owner: { type: Types.ObjectId, ref: 'User' },
  content: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  email: { type: String },
});

module.exports = model('Post', schema);
