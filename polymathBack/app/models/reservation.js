const { Schema, model, SchemaTypes } = require('mongoose');

const reservationSchema = Schema({

  date_reservation: {
      type: String,
      required: true
  },
  restaurant: {
    type: SchemaTypes.ObjectId,
    ref: 'Restaurants',
  },
},
{
    timestamps: true,
    versionKey: false
});

reservationSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();
  object.rvid = _id;
  return object;
});

module.exports = model('Reservations', reservationSchema);