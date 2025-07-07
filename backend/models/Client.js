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
  img: {
    data: Buffer,
    contentType: String,
  },
  designation: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Client', clientSchema);

