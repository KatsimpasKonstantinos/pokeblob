import React, { useEffect, useState } from 'react';
import './CardCanvas.css';
import { drawCard } from '../utils/drawCard';
import { PokeblobCard } from '../Classes/PokeblobCard';
import { BlobSVGTexts } from '../utils/blobLoading';


function CardCanvas(props: { pokeglobCard: PokeblobCard, size: number, blobSVGTexts: BlobSVGTexts }) {
    const pokeglobCard = props.pokeglobCard;
    const canvasId = pokeglobCard.id.toString();
    const size = props.size;
    const resolution = 800;

    const canvasWidth = 400 * size;
    const canvasHeight = 800 * size;

    useEffect(() => {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        if (canvas) {
            (async () => {
                try {
                    canvas.style.visibility = 'hidden';
                    await drawCard(canvas, pokeglobCard, props.blobSVGTexts);
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
                width={1 * resolution} // actual resolution
                height={2 * resolution}
            ></canvas>
        </div>
    );
}

export default CardCanvas;
