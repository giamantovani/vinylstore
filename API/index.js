const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'imgAPI')));

const albumes = [
  {
    nombre: "The Dark Side of the Moon",
    artista: "Pink Floyd",
    anno: 1973,
    portada: "http://localhost:3000/desde0/js/imgAPI/Dark_Side_of_the_Moon.png",
    canciones: [
      "Speak to Me",
      "Breathe",
      "On the Run",
      "Time",
      "The Great Gig in the Sky",
      "Money",
      "Us and Them",
      "Any Colour You Like",
      "Brain Damage",
      "Eclipse"
    ]
  },
  {
    nombre: "Close to the Edge",
    artista: "Yes",
    anno: 1972,
    portada: "http://localhost:3000/desde0/js/imgAPI/Dark_Side_of_the_Moon.png",
    canciones: [
      "Close to the Edge",
      "And You and I",
      "Siberian Khatru"
    ]
  },
  {
    nombre: "In the Court of the Crimson King",
    artista: "King Crimson",
    anno: 1969,
    portada: "http://localhost:3000/desde0/js/imgAPI/Dark_Side_of_the_Moon.png",
    canciones: [
      "21st Century Schizoid Man",
      "I Talk to the Wind",
      "Epitaph",
      "Moonchild",
      "The Court of the Crimson King"
    ]
  },
  {
    nombre: "Selling England by the Pound",
    artista: "Genesis",
    anno: 1973,
    portada: "http://localhost:3000/desde0/js/imgAPI/Dark_Side_of_the_Moon.png",
    canciones: [
      "Dancing with the Moonlit Knight",
      "I Know What I Like (In Your Wardrobe)",
      "Firth of Fifth",
      "More Fool Me",
      "The Battle of Epping Forest",
      "After the Ordeal",
      "The Cinema Show",
      "Aisle of Plenty"
    ]
  }
];

app.get('/api/albumes', (req, res) => {
  res.json(albumes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});