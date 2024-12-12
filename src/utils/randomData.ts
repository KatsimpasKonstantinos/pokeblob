import { Attack } from "../Classes/Attack";
import { Pokeglob, PokeGlobSpikenessType } from "../Classes/Pokeglob"
import { PokeglobCard } from "../Classes/PokeglobCard";


function randomAttack(): Attack {
    let randomName = ["slasher", "stab", "fireball", "watergun", "holy light", "holy smite"][Math.floor(Math.random() * 6)];
    let randomDamage = Math.floor(Math.random() * Math.random() * 10);
    let randomCooldown = Math.floor(Math.random() * Math.random() * 100);
    return new Attack(randomName, randomDamage, randomCooldown);
}

function randomPokeglob(amount: number): Pokeglob[] {
    const pokeglobs: Pokeglob[] = [];
    for (let i = 0; i < amount; i++) {
        const attack = randomAttack();
        let randomType = ["fire", "water", "holy"][Math.floor(Math.random() * 3)] as "fire" | "water" | "holy";
        const pokeglob = new Pokeglob(randomType, Math.floor(Math.random() * Math.random() * 100), 100, [attack], Math.floor(Math.random() * 13) + 1 as PokeGlobSpikenessType);
        pokeglobs.push(pokeglob);
    }
    return pokeglobs;
}

function randomPokeglobCard(): PokeglobCard {
    let randomName = ["Bob", "Joe", "Steve", "John", "Sally", "Sue", "Jill", "Jack", "Jenny", "Jen"][Math.floor(Math.random() * 10)];
    let randomID = Math.random()
    let randomPokeglobsAmount = Math.floor(Math.random() * Math.random() * Math.random() * 10) + 1;
    return new PokeglobCard(randomName, randomID, "Me", randomPokeglob(randomPokeglobsAmount));
}

export { randomAttack, randomPokeglob, randomPokeglobCard };

