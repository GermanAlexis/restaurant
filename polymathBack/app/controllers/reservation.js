const Reservation = require('../models/reservation');
const Restaurant =  require('../models/restaurant');

const moment = require('moment')

const getReservation = async (req, res) => {

  try {
    const [reservations, total] = await Promise.all([
      Reservation.find().populate('restaurant', 'name description'),
      Reservation.countDocuments(),
    ]);

      res.json({
        Ok: true,
        msg: 'Todas las reservationes',
        reservations: reservations,
        total,
      });
  } catch (error) {
      console.log(error)
  }
};




const createReservation = async (req, res) => {
    const restaurant = req.params.id

    if(!restaurant) {
      return res.status(400).json({
          ok: false,
          msg: 'Restaurant requerido'
        });    
    }

  try {
    const rest = await Restaurant.findById(restaurant)
    if (!rest){
      return res.status(404).json({
          ok: false,
          msg: 'Restaurant not exist'
        });
    }
    
    let { date_reservation } = req.body;
    date_reservation = moment(date_reservation).format('DD-MM-YYYY')
    
    const countReservation = await Reservation.find({date_reservation}).count()
    
    if(countReservation >= 20){
        return res.status(404).json({
            ok: false,
            msg: 'limites superados en las reversas'
        });
    }
    const countRestaurant = await Reservation.find({restaurant, date_reservation }).count()
    if(countRestaurant >= 15 ){
        return res.status(404).json({
            ok: false,
            msg: 'limites superados en las reversas por dias'
        });
    }

    const resversave = new Reservation({
        date_reservation,
        restaurant
    })
    resversave.restaurant = restaurant
    const redb = await resversave.save()

    res.status(201).json({
      ok: true,
      msg: 'Restaurante Creado',
      restaurant: redb,
      resercount: countReservation
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el adminsitrador',
    });
  }
};

module.exports = {
    getReservation,
    createReservation,
};