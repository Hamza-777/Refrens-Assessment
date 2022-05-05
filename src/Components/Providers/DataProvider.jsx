import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const dataProviderContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null); // Stores fetched data
  const [results, setResults] = useState([]); // Stores all characters recieved after every infinite scroll encounter
  const [next, setNext] = useState('https://rickandmortyapi.com/api/character'); // Stores the next API to be called
  const [episodes, setEpisodes] = useState([]); // Stores an array of all episodes

  useEffect(() => {
    // Requesting for all episodes in rick and morty
    (async () => {
      let res = await Promise.all([
        axios.get('https://rickandmortyapi.com/api/episode?page=1'),
        axios.get('https://rickandmortyapi.com/api/episode?page=2'),
        axios.get('https://rickandmortyapi.com/api/episode?page=3'),
      ]);
      let arr = [
        res[0].data.results,
        res[1].data.results,
        res[2].data.results,
      ].flat();
      setEpisodes([...episodes, ...arr.map((item) => item.name)]); // Storing names of all episodes by mapping
    })();
  }, []);

  useEffect(() => {
    // Recieving data on a gap of 1.5 seconds after hitting the bottom of the page
    setTimeout(async () => {
      const res = await axios.get(next);
      setData(res.data);
      setResults([...results, ...res.data.results]);
    }, 1500);
  }, [next]);

  return (
    <dataProviderContext.Provider value={{ data, results, episodes, setNext }}>
      {children}
    </dataProviderContext.Provider>
  );
};

const useDataProvider = () => useContext(dataProviderContext);

DataProvider.propTypes = {
  children: PropTypes.element,
};

export { DataProvider, useDataProvider };
