import './App.css';
import Home from './Pages/Home/Home';
import PokemonInfoPage from './Pages/Pokemon/Pokemon';
import Navbar from '../src/Components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useStyles from './appStyles';

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/pokemon/:id"
          element={<PokemonInfoPage>aa</PokemonInfoPage>}
        />
        <Route path="/" exact element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
