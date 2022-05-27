import useStyle from './styles';
import Card from '@mui/material/Card';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function CardFilho({ pokemon, id, idPhoto }) {
  const classes = useStyle();

  const photoURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idPhoto}.png`;
  return (
    <Link to={`/pokemon/${id}`}>
      <Card className={[classes.card, 'cardHover']}>
        <div className={classes.divImgId}>
          <Avatar
            variant="square"
            className={[classes.imgDiv, 'imgDivHover']}
            src={photoURL}
          />
          <p className={[classes.idInfo]}>#{idPhoto}</p>
        </div>

        <div className={classes.infoDiv}>
          <p className={classes.info}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            {/* para deixar a primeira letra maiúscula*/}
          </p>
        </div>
      </Card>
    </Link>
  );
}
export default CardFilho;
