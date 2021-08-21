const { Schema, model } = require('mongoose');

const restaurantSchema = Schema({

  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
  },
  url_img:{
    type: String,
    required: true
  }
},
{
    timestamps: true,
    versionKey: false
});

restaurantSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();
  object.rid = _id;
  return object;
});

module.exports = model('restaurants', restaurantSchema);