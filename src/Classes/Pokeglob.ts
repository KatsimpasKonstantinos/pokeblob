import { Attack } from "./Attack";
import { color } from "../utils/color";

class Pokeglob {
    type: PokeglobType;
    maxHealth: number;
    currentHealth: number;
    attacks: Attack[];
    spikeness: PokeGlobSpikenessType;
    constructor(type: PokeglobType, maxHealth: number, currentHealth: number, attacks: Attack[], spikeness: PokeGlobSpikenessType) {
        this.type = type;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.attacks = attacks;
        this.spikeness = spikeness;
    }
}

type PokeGlobSpikenessType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
const PokeglobSpikenessMax = 13;
type PokeglobType = "fire" | "water" | "holy";

const PokeglobTypeColor: { [key in Pokeglob["type"]]: { background: string, main: string } } = {
    fire: { background: color.accentD, main: color.primary },
    water: { background: color.accentC, main: color.accentA },
    holy: { background: color.accentE, main: color.highlight }
};

export { Pokeglob, PokeglobTypeColor, PokeGlobSpikenessType, PokeglobType, PokeglobSpikenessMax };
