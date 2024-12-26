import React, { useEffect } from 'react';
import { BackgroundCardName, BackgroundCardStyle, BackgroundCardOwner } from '../Components/Background';

function NotFoundPage() {

    useEffect(() => {
        BackgroundCardStyle.value = "BackgroundNotFoundPage";
        BackgroundCardName.value = "404";
        BackgroundCardOwner.value = "Not Found";
    }, []);

    return <></>;
}

export default NotFoundPage;