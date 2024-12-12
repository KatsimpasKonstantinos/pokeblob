import React from 'react';
import './App.css';
import CardCanvas from './Pages/CardCanvas';
import { Attack } from './Classes/Attack';
import { Pokeglob } from './Classes/Pokeglob';
import { PokeglobCard } from './Classes/PokeglobCard';


function App() {
  const [pokeglobCard, setPokeglobCard] = React.useState<PokeglobCard>(randomPokeglobCard());

  function randomPokeglob(amount: number): Pokeglob[] {
    const pokeglobs: Pokeglob[] = [];
    for (let i = 0; i < amount; i++) {
      const attack = new Attack("slasher", 10, 10);
      let randomType = ["fire", "water", "holy"][Math.floor(Math.random() * 3)] as "fire" | "water" | "holy";
      const pokeglob = new Pokeglob(randomType, Math.floor(Math.random() * Math.random() * 100), 100, [attack], Math.floor(Math.random() * 13) + 1);
      pokeglobs.push(pokeglob);
    }
    return pokeglobs;
  }

  function randomPokeglobCard(): PokeglobCard {
    let randomName = ["Bob", "Joe", "Steve", "John", "Sally", "Sue", "Jill", "Jack", "Jenny", "Jen"][Math.floor(Math.random() * 10)];
    let randomID = Math.random()
    let randomPokeglobsAmount = Math.floor(Math.random() * Math.random() * Math.random() * 10) + 1;
    return new PokeglobCard(randomName, randomID, "Me", randomPokeglob(randomPokeglobsAmount));
  }

  function generateNewCard() {
    setPokeglobCard(randomPokeglobCard());
    console.log(pokeglobCard);
  }

  return (
    <div className="App">
      <h1 >Card Canvas</h1>
      <div className='CanvasGallery'>
        <CardCanvas pokeglobCard={pokeglobCard} />
      </div>
      <button onClick={() => generateNewCard()}>Generate Card</button>
    </div>
  );
}

export default App;
