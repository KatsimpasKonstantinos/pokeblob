import { Attack } from "./Attack";
import { color } from "../utils/color";

class Pokeblob {
    type: PokeblobType;
    maxHealth: number;
    currentHealth: number;
    attacks: Attack[];
    spikeness: PokeblobSpikenessType;
    constructor(type: PokeblobType, maxHealth: number, currentHealth: number, attacks: Attack[], spikeness: PokeblobSpikenessType) {
        this.type = type;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.attacks = attacks;
        this.spikeness = spikeness;
    }
}

type PokeblobSpikenessType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
const PokeblobSpikenessMax = 13;
type PokeblobType = "fire" | "water" | "holy";

const PokeblobTypeColor: { [key in Pokeblob["type"]]: { background: string, main: string } } = {
    fire: { background: color.accentD, main: color.primary },
    water: { background: color.accentC, main: color.accentA },
    holy: { background: color.accentE, main: color.highlight }
};

export { Pokeblob, PokeblobTypeColor, PokeblobSpikenessType, PokeblobType, PokeblobSpikenessMax };
