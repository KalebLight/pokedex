import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import useStyle from './styles';

function PokemonInfoPage() {
  const { id } = useParams();
  const classes = useStyle();
  const [pokemon, setPokemon] = useState();

  async function loadPokemon() {
    const { data } = await api.get(`pokemon/${id}`);
    console.log(data);
    setPokemon(data);
  }

  function hehe() {
    console.log('Pokemon: ' + pokemon.name);
  }
  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <>
      <p>{pokemon.name}</p>
      <button onClick={hehe}>hehe</button>
    </>
  );
}
export default PokemonInfoPage;
