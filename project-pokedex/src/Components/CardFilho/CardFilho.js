import useStyle from './styles';
import Card from '@mui/material/Card';
import React from 'react';
import Avatar from '@mui/material/Avatar';

function CardFilho({ pokemon, id }) {
  const classes = useStyle();

  const photoURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
  return (
    <Card className={classes.card}>
      <div className={classes.divImgId}>
        <Avatar variant="square" className={classes.imgDiv} src={photoURL} />
        <p className={classes.idInfo}>#{id}</p>
      </div>

      <div className={classes.infoDiv}>
        <p className={classes.info}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          {/* para deixar a primeira letra maiúscula */}
        </p>
      </div>
    </Card>
  );
}
export default CardFilho;
