import React, { useRef } from 'react';
import './Background.css';
import { randomPokeglobCard } from '../utils/randomData';
import CardCanvas from '../Pages/CardCanvas';
import { BlobSVGTexts } from '../utils/blobLoading';
import { computed, signal } from '@preact/signals-react';

type BackgroundCardStateType = 'BackgroundLandingPage' | 'BackgroundCreatePage' | 'BackgroundDefault';
export const BackgroundCardState = signal<BackgroundCardStateType>();

function Background(props: { blobSVGTexts: BlobSVGTexts }) {
    const boxRef = useRef(null);

    const pokeglobCard = randomPokeglobCard();

    const triggerAnimation = computed(() => {
        console.log('triggerAnimation');
        const box = boxRef.current;
        if (!box) return;
        box.className = "Background";
        box.classList.add(BackgroundCardState.value ?? "BackgroundDefault");
        void box.offsetWidth; // forces reflow
        return ""
    });

    return (
        <div className='BackgroundWrapper'>
            <div ref={boxRef} className='Background'>
                <CardCanvas pokeglobCard={pokeglobCard} size={window.innerWidth / 1500} blobSVGTexts={props.blobSVGTexts} />
            </div>
            {triggerAnimation}
        </div>
    );
}


export default Background;
