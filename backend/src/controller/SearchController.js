const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response) {
    // Buscar todos os devs num raio de 10km
    // Filtrar por tecnologias
    const { latitude, longitude, techs } = request.query;

    const arrayTechs = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: arrayTechs
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000 // metros
        }
      }
    });

    return response.json({ devs });
  }
};
