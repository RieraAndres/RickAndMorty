function getCharById(res, id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error al obtener el personaje");
      }
    })
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
}

module.exports = getCharById;
