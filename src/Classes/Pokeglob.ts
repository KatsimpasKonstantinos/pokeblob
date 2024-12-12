import { Attack } from "./Attack";
import { color } from "../utils/color";

class Pokeglob {
    type: "fire" | "water" | "holy";
    maxHealth: number;
    currentHealth: number;
    attacks: Attack[];
    spikeness: number;
    constructor(type: "fire" | "water" | "holy", maxHealth: number, currentHealth: number, attacks: Attack[], spikeness: number) {
        this.type = type;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.attacks = attacks;
        this.spikeness = spikeness;
    }
}

const PokeglobTypeColor: { [key in Pokeglob["type"]]: { background: string, main: string } } = {
    fire: { background: color.accentD, main: color.primary },
    water: { background: color.accentC, main: color.accentA },
    holy: { background: color.accentE, main: color.highlight }
};

export { Pokeglob, PokeglobTypeColor };
