import Card from '@mui/material/Card';
import CardFilho from '../CardFilho/CardFilho';
import useStyle from './styles';
import api from '../../services/api';
import React, { useState, useEffect } from 'react';

function CardList() {
  const classes = useStyle();
  const [pokemons, setPokemons] = useState([]);

  async function loadPokemons() {
    await api
      .get('/pokemon?https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .then((response) => {
        const { data } = response;
        // console.log(data.results);
        setPokemons(data.results);
        // console.log(pokemons);
      });
  }

  function showPokemon() {
    console.log(pokemons);
  }

  useEffect(() => {
    loadPokemons();
    // console.log(pokemons);
  }, []);

  return (
    <>
      <button onClick={showPokemon}>eaeae</button>
      <Card className={classes.card}>
        {pokemons.map((pokemon, index) => (
          <CardFilho key={index} pokemon={pokemon} />
        ))}
      </Card>
    </>
  );
}

export default CardList;
