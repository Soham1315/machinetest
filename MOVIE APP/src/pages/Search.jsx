import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../components/MovieList';

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';
  const [searchResults, setSearchResults] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  // Fetch all movies on component mount
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        setAllMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchAllMovies();
  }, []);

  // Filter movies whenever query changes
  useEffect(() => {
    if (query.trim()) {
      const filtered = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [query, allMovies]);

  return (
    <div className="search-page">
      <h1>Search Results for "{query}"</h1>
      {searchResults.length > 0 ? (
        <MovieList movies={searchResults} />
      ) : (
        <p>No movies found matching your search.</p>
      )}
    </div>
  );
};

export default Search;