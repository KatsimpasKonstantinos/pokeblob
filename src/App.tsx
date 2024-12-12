import React from 'react';
import './App.css';
import CardCanvas from './Pages/CardCanvas';
import { Attack } from './Classes/Attack';
import { Pokeglob } from './Classes/Pokeglob';
import { PokeglobCard } from './Classes/PokeglobCard';
import LibraryPage from './Pages/LibraryPage';


function App() {

  return (
    <div className="App">
      <h1>Card Library</h1>
      <LibraryPage cardNumber={99} />
    </div>
  );
}

export default App;
