import React, { useEffect, useState } from 'react';
import { drawCard } from '../utils/drawCard';
import { PokeglobCard } from '../Classes/PokeglobCard';


function CardCanvas(props: { pokeglobCard: PokeglobCard, size: number }) {
    const pokeglobCard = props.pokeglobCard;
    const canvasId = pokeglobCard.id.toString();
    const size = props.size;

    const canvasWidth = 400 * size;
    const canvasHeight = 800 * size;

    useEffect(() => {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        if (canvas) {
            (async () => {
                try {
                    canvas.style.visibility = 'hidden';
                    await drawCard(canvas, pokeglobCard);
                    canvas.style.visibility = 'visible';
                } catch (error) {
                    console.error('Error drawing cards:', error);
                }
            })();

        }
    }, [pokeglobCard]); // Empty dependency array ensures this runs once after mount


    return (
        <div className="CardCanvas">
            <canvas
                style={{ width: canvasWidth + "px", height: canvasHeight + "px" }}
                id={canvasId}
                width={400} // actual resolution
                height={800}
            ></canvas>
        </div>

    );
}

export default CardCanvas;
