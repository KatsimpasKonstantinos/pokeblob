import React, { CSSProperties } from "react";

function CreatePokeblobPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Create Pokeblob</h1>
            <form style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input type="text" id="name" name="name" style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="owner" style={styles.label}>Owner:</label>
                    <input type="text" id="owner" name="owner" style={styles.input} />
                </div>
                <button type="submit" style={styles.button}>Create</button>
            </form>
        </div>
    );
}

const styles: Record<string, CSSProperties> = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Arial', sans-serif",
    },
    heading: {
        marginBottom: "1.5rem",
        color: "#333",
        fontSize: "2rem",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "300px",
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        marginBottom: "0.5rem",
        color: "#555",
        fontWeight: "bold",
    },
    input: {
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        outline: "none",
    },
    button: {
        marginTop: "1rem",
        padding: "0.75rem",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontSize: "1rem",
        cursor: "pointer",
        transition: "background-color 0.2s ease-in-out",
    },
};

export default CreatePokeblobPage;
