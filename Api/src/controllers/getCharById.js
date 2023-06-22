const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL}${id}`);
    const data = response.data;
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };
    return res.status(200).json(character);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getCharById;
