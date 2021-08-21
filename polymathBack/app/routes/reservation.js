const { Router } = require('express');
const { check } = require('express-validator');
const { validateCampus } = require('../helpers/field-valid');

const {
  getReservation,
  createReservation,
} = require('../controllers/reservation');


const router = Router();

router.get('/', getReservation);

router.post(
  '/:id',
  [
    check('date_reservation', 'la fecha de debe ser valida').isDate(),
    validateCampus
  ],
  createReservation
);



module.exports = router;