import useStyle from './styles';
import Card from '@mui/material/Card';
import React from 'react';
import Avatar from '@mui/material/Avatar';

function CardFilho({ pokemon, id }) {
  const classes = useStyle();
  const idPokemon = id + 1;
  const aaa =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/0' +
    idPokemon +
    '.png';
  const photoURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/{$idPokemon}.png`;
  return (
    <Card className={classes.card}>
      <div>
        {idPokemon}
        <p sx={{ textOverflow: 'wrap' }}>{aaa}</p>
        <Avatar variant="square" className={classes.imgCard} src={aaa} />
        {/* <img
          className={classes.card}
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
          alt=""
        /> */}
      </div>
      <div className={classes.infoDiv}>{pokemon.name}</div>
    </Card>
  );
}
export default CardFilho;
