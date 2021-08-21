const Restaurant = require('../models/restaurant');

const getRestaurant = async (req, res) => {

  try {
    const [restaurants, total] = await Promise.all([
        Restaurant.find()
        .populate('reservation', 'name date_reservation'),
        Restaurant.countDocuments(),
      ]);
    
      res.json({
        Ok: true,
        msg: 'Todos los restraurantes',
        restaurants: restaurants ,
        total,
      });
  } catch (error) {
      console.log(error)
  }
};


const getByIdRestaurant = async (req, res) => {
  const rid = req.params.id
  try {
    
    const restaurant = await Restaurant.findById(rid)
    .populate('reservation', 'name')
      
    res.status(200).json({
    Ok: true,
    msg: 'Restaurante Encontrado',
    restaurant,
    });

  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      msg: `hay un error ver console`
    })
  }
};

const createRestuarant = async (req, res) => {


  const restaurant = new Restaurant({
    ...req.body,
  });
  try {
    const restaurantDB = await restaurant.save();
    res.status(201).json({
      ok: true,
      msg: 'Restaurante Creado',
      restaurant: restaurantDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el adminsitrador',
    });
  }
};

const updateRestuarant = async (req, res) => {
  const id = req.params.id;

  try {
    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
      return res.status(404).json({
        ok: false,
        msg: `No se encontro ningun medico con ese id ${id}`,
      });
    }
    const changeData = {
      ...req.body
    };

    const restaurantUpdated = await Restaurant.findByIdAndUpdate(id, changeData, {
      new: true,
    });
    res.status(200).json({
      ok: true,
      msg: ' el restaurante se actuliazo con exito ',
      restaurant: restaurantUpdated
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Comuniquese con el adminsitrador',
    });
  }
};

const deleteRestuarant = async (req, res) => {
  const id = req.params.id;

  try {
    const medic = await Restaurant.findById(id);

    if (!medic) {
      return res.status(404).json({
        ok: false,
        msg: `No se encontro ningun medico con ese id ${id}`,
      });
    }

    const restaurantDelete = await Medic.findByIdAndRemove(id);
    res.status(200).json({
      ok: true,
      msg: ' el medico se elimino con exito ',
      restaurant: restaurantDelete,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Comuniquese con el adminsitrador',
    });
  }
};
module.exports = {
    getRestaurant,
    getByIdRestaurant,
    createRestuarant,
    updateRestuarant,
    deleteRestuarant
};