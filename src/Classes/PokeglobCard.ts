import { Pokeglob } from './Pokeglob';

class PokeglobCard {
    name: string;
    id: number;
    owner: string;
    pokeglobs: Pokeglob[];
    constructor(name: string, id: number, owner: string, pokeglobs: Pokeglob[]) {
        this.name = name;
        this.id = id;
        this.owner = owner;
        this.pokeglobs = pokeglobs;
    }
}

export { PokeglobCard };