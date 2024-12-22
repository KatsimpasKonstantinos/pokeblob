import React, { useEffect, useRef } from 'react';
import { BlobSVGTexts } from '../utils/blobLoading';
import { PokeblobCard } from '../Classes/PokeblobCard';
import { drawCard } from '../utils/drawCard';
import { BackgroundCardName, BackgroundCardOwner } from './Background';
import { effect, signal } from '@preact/signals-react';
import { sign } from 'crypto';

function BackgroundCanvas(props: { pokeglobCard: PokeblobCard, blobSVGTexts: BlobSVGTexts }) {
    const pokeglobCard = props.pokeglobCard;
    const size = window.innerHeight / 1080;
    const canvasWidth = 400 * size;
    const canvasHeight = 800 * size;

    const canvas1Ref = useRef<HTMLCanvasElement>(null);
    const canvas2Ref = useRef<HTMLCanvasElement | null>(null);

    const drawing = signal(false);

    let dispose = effect(() => {
        pokeglobCard.name = BackgroundCardName.value;
        pokeglobCard.owner = BackgroundCardOwner.value;
        draw();
    });

    useEffect(() => {
        draw();
        return () => {
            dispose();
        };
    }, []);


    async function draw() {
        if (drawing.peek()) return;
        drawing.value = true;
        const canvas1 = canvas1Ref.current;

        if (canvas1 && canvas2Ref.current) {
            const canvas2 = canvas2Ref.current;
            const ctx = canvas1.getContext('2d');

            if (ctx) {
                try {
                    await drawCard(canvas2, pokeglobCard, props.blobSVGTexts);
                    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
                    ctx.drawImage(canvas2, 0, 0);
                } catch (error) {
                    console.error('Error drawing cards:', error);
                }
            }
        }
        drawing.value = false;
    }

    return (
        <div>
            <canvas
                ref={canvas1Ref}
                width={600}
                height={1200}
                style={{
                    width: canvasWidth + 'px',
                    height: canvasHeight + 'px',
                }}
            />
            <canvas
                ref={canvas2Ref}
                width={600}
                height={1200}
                style={{
                    width: 0 + 'px',
                    height: 0 + 'px',
                }}
            />
        </div>
    );
}

export default BackgroundCanvas;
