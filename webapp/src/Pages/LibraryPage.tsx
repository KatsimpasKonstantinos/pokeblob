import React from 'react';
import { randomPokeglobCard } from '../utils/randomData';
import { PokeblobCard } from '../Classes/PokeblobCard';
import CardCanvas from './CardCanvas';
import { BlobSVGTexts } from '../utils/blobLoading';

function LibraryPage(props: { cardNumber: number, blobSVGTexts: BlobSVGTexts }) {

    const cardNumber = props.cardNumber;
    const pokeglobCards: PokeblobCard[] = Array.from({ length: cardNumber }, () => randomPokeglobCard(true));

    function renderLibrary() {
        return pokeglobCards.map((pokeglobCard, index) => (
            <CardCanvas key={index} pokeglobCard={pokeglobCard} size={1} blobSVGTexts={props.blobSVGTexts} />
        ));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: "wrap" }}>
            {renderLibrary()}
        </div>
    );
}


export default LibraryPage;
