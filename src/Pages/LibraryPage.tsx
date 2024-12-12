import React from 'react';
import { randomPokeglobCard } from '../utils/randomData';
import { Pokeglob } from '../Classes/Pokeglob';
import { PokeglobCard } from '../Classes/PokeglobCard';
import CardCanvas from './CardCanvas';

function LibraryPage(props: { cardNumber: number }) {
    const cardNumber = props.cardNumber;
    const pokeglobCards: PokeglobCard[] = Array.from({ length: cardNumber }, () => randomPokeglobCard());

    function renderLibrary() {
        return pokeglobCards.map((pokeglobCard, index) => (
            <CardCanvas key={index} pokeglobCard={pokeglobCard} size={0.5} />
        ));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: "wrap" }}>
            {renderLibrary()}
        </div>
    );
}


export default LibraryPage;
