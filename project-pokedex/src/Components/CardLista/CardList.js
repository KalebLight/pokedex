import Card from '@mui/material/Card';
import CardFilho from '../CardFilho/CardFilho';
import useStyle from './styles';
import api from '../../services/api';
import React, { useState, useEffect } from 'react';

function CardList() {
  const classes = useStyle();
  const [pokemons, setPokemons] = useState([]);

  function getIdPhotoPokemon(id) {
    var stringId = String(id + 1);
    var newId = '';
    if (stringId.length === 1) {
      newId = '00' + stringId;
      return newId;
    }
    if (stringId.length === 2) {
      newId = '0' + stringId;
      return newId;
    } else {
      newId = stringId;
      return newId;
    }
  }

  async function loadPokemons() {
    await api
      .get('/pokemon?https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .then((response) => {
        const { data } = response;
        setPokemons(data.results);
      });
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <>
      <Card className={classes.card}>
        {pokemons.map((pokemon, index) => (
          <CardFilho
            key={index}
            id={index + 1}
            idPhoto={getIdPhotoPokemon(index)}
            pokemon={pokemon}
          />
        ))}
      </Card>
    </>
  );
}

export default CardList;
