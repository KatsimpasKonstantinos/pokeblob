import React, { useEffect, useState } from 'react';
import { BackgroundCardName, BackgroundCardStyle } from '../Components/Background';

function LandingPage() {

    useEffect(() => {
        BackgroundCardStyle.value = "BackgroundLandingPage";
        BackgroundCardName.value = "LandingPage";
    }, []);

    return (
        <div>
        </div>
    );
}

export default LandingPage;