const { Router } = require('express');
const { check } = require('express-validator');
const {
  getRestaurant,
  getByIdRestaurant,
  createRestuarant,
  updateRestuarant,
  deleteRestuarant,
} = require('../controllers/restaurant');


const router = Router();

router.get('/', getRestaurant);
router.get('/:id', getByIdRestaurant);

router.post(
  '/',
  [
    check('name_medic', 'el nombre es obligatorio').not().isEmpty(),
    check('hospital', 'el id del Hospital debe ser valido').isMongoId(),
  ],
  createRestuarant
);
router.put(
  '/:id',
  [
    check('name_medic', 'el nombre es obligatorio').not().isEmpty(),
    check('area_medic', 'el area es obligatorio').not().isEmpty(),
    check('hospital', 'El Id del Hospital debe ser valido').isMongoId(),

  ],
  updateRestuarant
);

router.delete('/:id', deleteRestuarant);

module.exports = router;