import './App.css';
import Home from './Pages/Home/Home';
import PokemonInfoPage from '../src/Components/PokemonInfoPage/PokemonInfoPage';
import Navbar from '../src/Components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useStyles from './appStyles';
import Teste from './Components/Teste/Teste';

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/pokemon"
          element={<PokemonInfoPage>aa</PokemonInfoPage>}
        />
        <Route path="/" exact element={<Home></Home>} />
        <Route path="/teste" exact element={<Teste></Teste>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
