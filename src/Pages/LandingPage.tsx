import React, { useEffect, useState } from 'react';
import { BackgroundCardName, BackgroundCardOwner, BackgroundCardStyle } from '../Components/Background';
import { Link } from 'react-router-dom';

function LandingPage() {

    useEffect(() => {
        BackgroundCardStyle.value = "BackgroundLandingPage";
        BackgroundCardName.value = "LandingPage";
        BackgroundCardOwner.value = "Konstantinos Katsimpas";
    }, []);

    return (
        <div>
            <h1>Welcome to <Link to="/create">Pokeblobs</Link></h1>
        </div>
    );
}

export default LandingPage;