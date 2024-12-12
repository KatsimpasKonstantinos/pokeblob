import React, { useEffect } from 'react';
import { drawCard } from '../utils/drawCard';
import { Attack } from '../Classes/Attack';
import { Pokeglob } from '../Classes/Pokeglob';
import { PokeglobCard } from '../Classes/PokeglobCard';


function CardCanvas() {
    const canvasId = Math.random().toString(36).substring(7);

    function getNumber() {
        const rand = Math.random();

        if (rand < 0.9) return 1;
        if (rand < 0.99) return 2;
        if (rand < 0.999) return 3;
        if (rand < 0.9999) return 4;
        if (rand < 0.99999) return 5;
        if (rand < 0.999999) return 6;
        if (rand < 0.9999999) return 7;
        if (rand < 0.99999999) return 8;
        if (rand < 0.999999999) return 9;

        return 10;
    }

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


    const card = new PokeglobCard("My Card", 1, "Me", randomPokeglob(Math.floor(Math.random() * Math.random() * Math.random() * 10) + 1));



    useEffect(() => {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        if (canvas) {
            (async () => {
                try {
                    await drawCard(canvas, card);
                } catch (error) {
                    console.error('Error drawing cards:', error);
                }
            })();

        }
    }, []); // Empty dependency array ensures this runs once after mount


    return (
        <div className="CardCanvas">
            <canvas
                id={canvasId}
                width={400}
                height={800}
            ></canvas>
        </div>
    );
}

export default CardCanvas;
