import React, { useEffect } from 'react';
import { BackgroundCardStyle } from '../Components/Background';

function GeneratingPage() {

    useEffect(() => {
        BackgroundCardStyle.value = "BackgroundGeneratingPage";
    }, []);

    return (
        <div>
            <h1>Generating Page</h1>
        </div>
    );
}

export default GeneratingPage;