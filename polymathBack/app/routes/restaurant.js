const { Router } = require('express');
const { check } = require('express-validator');
const {
  getRestaurant,
  getByIdRestaurant,
  createRestuarant,
  updateRestuarant,
  deleteRestuarant,
} = require('../controllers/restaurant');
const { validateCampus } = require('../helpers/field-valid');


const router = Router();

router.get('/', getRestaurant);
router.get('/:id', getByIdRestaurant);

router.post(
  '/',
  [
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('description', 'la descripcion es necesaria').not().isEmpty(),
    check('address', 'la address es necesaria').not().isEmpty(),
    check('city', 'la cuidad es necesaria').not().isEmpty(),
    check('url_img', 'la url_img es necesaria').not().isEmpty(),
    validateCampus
  ],
  createRestuarant
);
router.put(
  '/:id',
  [
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('description', 'la descripcion es necesaria').not().isEmpty(),
    check('address', 'la address es necesaria').not().isEmpty(),
    check('url_img', 'la url_img es necesaria').not().isEmpty(),
    validateCampus
  ],
  updateRestuarant
);

router.delete('/:id', deleteRestuarant);

module.exports = router;