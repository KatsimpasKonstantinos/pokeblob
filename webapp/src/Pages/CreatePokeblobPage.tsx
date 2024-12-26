import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackgroundCardStyle, BackgroundCardStateType, BackgroundCardName, BackgroundCardOwner } from "../Components/Background";
import "./CreatePokeblobPage.css";

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
        <>
            <h1>Create Pokeblob</h1>
            <div className="CreatePokeblobPage">
                <div
                    className="CreatePokeblobPage-container"
                    ref={containerRef}
                    tabIndex={-1} // Make div focusable for blur detection
                    onBlur={handleBlur}
                >
                    <div className="CreatePokeblobPage-input-group">
                        <label className="CreatePokeblobPage-label">
                            Name:
                            <input
                                className="CreatePokeblobPage-input"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value.toUpperCase())}
                                onFocus={() => handleFocus("BackgroundCreatePageName")}
                                maxLength={12}
                            />
                        </label>
                    </div>
                    <div className="CreatePokeblobPage-input-group">
                        <label className="CreatePokeblobPage-label">
                            Owner:
                            <input
                                className="CreatePokeblobPage-input"
                                type="text"
                                value={owner}
                                onChange={(e) => setOwner(e.target.value)}
                                onFocus={() => handleFocus("BackgroundCreatePageOwner")}
                                maxLength={27}
                            />
                        </label>
                    </div>
                    <Link
                        className="CreatePokeblobPage-link"
                        to={`/generating?name=${encodeURIComponent(
                            name
                        )}&owner=${encodeURIComponent(owner)}`}
                    >
                        <button className="CreatePokeblobPage-button" disabled={!name || !owner}>
                            CREATE
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CreatePokeblobPage;
