const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
  },
  designation: {
        type: String,
        required: true,
    },
},
{
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true }
});

module.exports = mongoose.model('Client', clientSchema);

