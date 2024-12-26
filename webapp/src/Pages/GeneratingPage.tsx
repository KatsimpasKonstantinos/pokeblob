import React, { useEffect } from 'react';
import { BackgroundCardStyle } from '../Components/Background';
import { useSearchParams } from 'react-router-dom';

function GeneratingPage() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    const owner = searchParams.get('owner');

    useEffect(() => {
        BackgroundCardStyle.value = "BackgroundGeneratingPage";
        console.log({ name, owner }); // debug
    }, [name, owner]);

    return (
        <div>
            <h1>Generating Page</h1>
            <h2>Name: {name}</h2>
            <h2>Owner: {owner}</h2>
        </div>
    );
}

export default GeneratingPage;
