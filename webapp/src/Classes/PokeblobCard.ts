import { Pokeblob } from './Pokeblob';

class PokeblobCard {
    name: string;
    id: number;
    owner: string;
    pokeglobs: Pokeblob[];
    constructor(name: string, id: number, owner: string, pokeglobs: Pokeblob[]) {
        this.name = name;
        this.id = id;
        this.owner = owner;
        this.pokeglobs = pokeglobs;
    }
}

export { PokeblobCard };