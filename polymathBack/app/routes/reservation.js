const { Router } = require('express');
const { check } = require('express-validator');
const {
  getReservation,
  createReservation,
} = require('../controllers/reservation');


const router = Router();

router.get('/', getReservation);

router.post(
  '/:id',
  [
    check('name_medic', 'el nombre es obligatorio').not().isEmpty(),
    check('hospital', 'el id del Hospital debe ser valido').isMongoId(),
  ],
  createReservation
);



module.exports = router;