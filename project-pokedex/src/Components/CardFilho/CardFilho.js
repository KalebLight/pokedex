import useStyle from './styles';
import Card from '@mui/material/Card';
import React from 'react';
import Avatar from '@mui/material/Avatar';

function CardFilho({ pokemon, id }) {
  const classes = useStyle();

  const photoURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
  return (
    <Card className={classes.card}>
      <div>
        <div className={classes.imgDiv}>
          <Avatar variant="square" className={classes.img} src={photoURL} />
        </div>
      </div>
      <div className={classes.infoDiv}>{pokemon.name}</div>
    </Card>
  );
}
export default CardFilho;
