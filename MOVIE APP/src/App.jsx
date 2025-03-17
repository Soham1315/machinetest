import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import TopRated from './pages/TopRated';
// import Upcoming from './pages/Upcoming';
import Search from './pages/Search';
import MovieDetail from './components/MovieDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/top-rated" element={<TopRated />} /> */}
        {/* <Route path="/upcoming" element={<Upcoming />} /> */}
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
};

export default App;