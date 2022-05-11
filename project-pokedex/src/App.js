import './App.css';
import Home from './Pages/Home/Home';
// import { Router, Switch, Routes, Route } from 'react-router-dom';
import useStyles from './appStyles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Home></Home>
    </div>
  );
}

export default App;
