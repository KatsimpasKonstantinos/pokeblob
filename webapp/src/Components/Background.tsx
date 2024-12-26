import React, { useEffect, useRef } from 'react';
import './Background.css';
import { randomPokeglobCard } from '../utils/randomData';
import { BlobSVGTexts } from '../utils/blobLoading';
import { computed, effect, signal, useComputed } from '@preact/signals-react';
import BackgroundCanvas from './BackgroundCanvas';

export type BackgroundCardStateType = 'BackgroundLandingPage' | 'BackgroundCreatePage' | 'BackgroundCreatePageName' | 'BackgroundCreatePageOwner' | 'BackgroundGeneratingPage' | 'BackgroundNotFoundPage' | 'BackgroundDefault';
export const BackgroundCardStyle = signal<BackgroundCardStateType>();

export const BackgroundCardName = signal<string>("Default Name");
export const BackgroundCardOwner = signal<string>("Default Owner");


function Background(props: { blobSVGTexts: BlobSVGTexts }) {
    const boxRef = useRef(null);

    const BackgroundCardPokeblobCard = randomPokeglobCard(false);

    const triggerAnimation = computed(() => {
        void BackgroundCardStyle.value; // BackgroundCardStyle.value ?? doesnt trigger signals >:(
        const box = boxRef.current;
        if (!box) return;
        box.className = "Background";
        box.classList.add(BackgroundCardStyle.value ?? "BackgroundDefault");
        void box.offsetWidth; // forces reflow
        return ""
    });

    return (
        <div className='BackgroundWrapper'>
            <div ref={boxRef} className='Background'>
                <BackgroundCanvas pokeglobCard={BackgroundCardPokeblobCard} blobSVGTexts={props.blobSVGTexts} />
            </div>
            {triggerAnimation}
        </div>
    );
}


export default Background;
