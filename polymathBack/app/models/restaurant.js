const { Schema, model, SchemaTypes } = require('mongoose');

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
    required: false
  },
  reservation: {
    type: SchemaTypes.ObjectId,
    ref: 'Reservations',
  },
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

module.exports = model('Restaurants', restaurantSchema);