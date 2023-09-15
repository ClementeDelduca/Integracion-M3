const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = (req, res) => {
  const {id} = req.params // {id: 5}
 // console.log(id)
  axios.get(`${URL}/${id}`)
  .then(({data}) => {
    console.log(data)
    if (data) {
      const {name, gender, species, origin = origin.name, image, status } = data
      const character = {name, gender, species, origin, id, image, status }
      res.status(201).json(character) 
    } else {
      res.status(404).json({mesagge: "Not Found"}) 
    }
  })
  .catch(error => {
  //  console.log(error)
    res.status(500).json({message: "HOLA FALLE"})
    //console.log(error)
  })
}




module.exports = getCharById;



