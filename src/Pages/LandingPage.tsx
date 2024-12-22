import React, { useEffect, useState } from 'react';
import { BackgroundCardState } from '../Components/Background';

function LandingPage() {
    BackgroundCardState.value = "BackgroundLandingPage";

    return (
        <div>
            <h1>Landing Page</h1>
        </div>
    );
}

export default LandingPage;