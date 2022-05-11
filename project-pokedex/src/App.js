import './App.css';
// import Home from './Pages/Home/Home';
// import { Router, Switch, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import useStyles from './appStyles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Navbar />
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
