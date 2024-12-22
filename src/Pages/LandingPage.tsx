import React, { useEffect, useState } from 'react';
import { BackgroundCardName, BackgroundCardOwner, BackgroundCardStyle } from '../Components/Background';

function LandingPage() {

    useEffect(() => {
        BackgroundCardStyle.value = "BackgroundLandingPage";
        BackgroundCardName.value = "LandingPage";
        BackgroundCardOwner.value = "Konstantinos Katsimpas";
    }, []);

    return (
        <div>
        </div>
    );
}

export default LandingPage;