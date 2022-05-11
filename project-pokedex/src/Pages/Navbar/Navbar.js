import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './styles';

function Navbar() {
  const classes = useStyles();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <img
              className={classes.icon}
              src="https://cdn.icon-icons.com/icons2/896/PNG/512/pokemon_go_play_game_cinema_film_movie_icon-icons.com_69163.png"
              alt="Minha Figura"
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
