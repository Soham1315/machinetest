const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Hardcoded movie data
const movies = [
 
  {
    id: 2,
    title: 'Spider-Man: No Way Home',
    overview: 'Peter Parker seeks the help of Doctor Strange to make the world forget his identity as Spider-Man, but a spell goes wrong and brings in villains from other universes.',
    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    release_date: '2021-12-17',
    vote_average: 8.2,
    cast: [
      { name: 'Tom Holland', character: 'Peter Parker / Spider-Man' },
      { name: 'Zendaya', character: 'MJ' },
      { name: 'Benedict Cumberbatch', character: 'Doctor Strange' },
    ],
  },
  {
    id: 3,
    title: 'The Batman',
    overview: 'Batman ventures into Gotham City\'s underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home, the scale of the perpetrator\'s plans becomes clear.',
    poster_path: '/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    release_date: '2022-03-04',
    vote_average: 8.1,
    cast: [
      { name: 'Robert Pattinson', character: 'Bruce Wayne / Batman' },
      { name: 'Zoë Kravitz', character: 'Selina Kyle / Catwoman' },
      { name: 'Paul Dano', character: 'The Riddler' },
    ],
  },
];

// Routes
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

 


app.get('/api/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === movieId);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Add this AFTER your other routes
const path = require('path');

// Serve static files from React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../movie-db-frontend/dist')));

  // Handle React routing - return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../movie-db-frontend/dist', 'index.html'));
  });
}