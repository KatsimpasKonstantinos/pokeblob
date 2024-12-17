import React from "react";

function CreatePokeblobPage() {
    return (
        <div>
            <h1>Create Pokeblob</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="owner">Owner:</label>
                    <input type="text" id="owner" name="owner" />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreatePokeblobPage;
