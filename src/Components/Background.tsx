import React, { useRef } from 'react';
import './Background.css';

function Background() {
    const boxRef = useRef(null);
    console.log(boxRef);

    function triggerAnimation() {
        console.log("triggerAnimation");
        const box = boxRef.current;
        box.classList.add("BackgroundAnimate");
        //void box.offsetWidth; // forces reflow
    };

    return (
        <div ref={boxRef} className='Background'>
            <button onClick={() => triggerAnimation()}>
                Test
            </button>
        </div>
    );
}



export default Background;
