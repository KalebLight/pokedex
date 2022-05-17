// import Button from '@mui/material/Button';
// import { Fragment } from 'react';
import CardList from '../../Components/CardLista/CardList';
import Navbar from '../../Components/Navbar/Navbar';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.divPai}>
      <Navbar />
      {/* <Button className={classes.btn}>dsds</Button> */}
      <CardList />
    </div>
  );
}

export default Home;
