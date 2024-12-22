import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackgroundCardStyle, BackgroundCardStateType, BackgroundCardName, BackgroundCardOwner } from "../Components/Background";

function CreatePokeblobPage() {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const containerRef = useRef(null);

    BackgroundCardName.value = name;
    BackgroundCardOwner.value = owner;

    const handleFocus = (state: BackgroundCardStateType) => {
        BackgroundCardStyle.value = state;
    };

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!containerRef.current.contains(e.relatedTarget)) {
            handleFocus("BackgroundCreatePage");
        }
    };

    useEffect(() => {
        // Set the initial background state only once
        BackgroundCardStyle.value = "BackgroundCreatePage";
    }, []);

    return (
        <div
            ref={containerRef}
            tabIndex={-1} // Make div focusable for blur detection
            onBlur={handleBlur}
        >
            <h1>Create Pokeblob</h1>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => handleFocus("BackgroundCreatePageName")}
                    />
                </label>
            </div>
            <div>
                <label>
                    Owner:
                    <input
                        type="text"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        onFocus={() => handleFocus("BackgroundCreatePageOwner")}
                    />
                </label>
            </div>
            <Link
                to={`/generating?name=${encodeURIComponent(
                    name
                )}&owner=${encodeURIComponent(owner)}`}
            >
                <button disabled={!name || !owner}>CREATE</button>
            </Link>
        </div>
    );
}

export default CreatePokeblobPage;
