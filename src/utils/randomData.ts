import { Attack } from "../Classes/Attack";
import { Pokeblob, PokeblobSpikenessType } from "../Classes/Pokeblob"
import { PokeblobCard } from "../Classes/PokeblobCard";


function randomAttack(): Attack {
    let randomName = ["slasher", "stab", "fireball", "watergun", "holy light", "holy smite"][Math.floor(Math.random() * 6)];
    let randomDamage = Math.floor(Math.random() * Math.random() * 10);
    let randomCooldown = Math.floor(Math.random() * Math.random() * 100);
    return new Attack(randomName, randomDamage, randomCooldown);
}

function randomPokeglob(amount: number): Pokeblob[] {
    const pokeglobs: Pokeblob[] = [];
    for (let i = 0; i < amount; i++) {
        const attack = randomAttack();
        let randomType = ["fire", "water", "holy"][Math.floor(Math.random() * 3)] as "fire" | "water" | "holy";
        const pokeglob = new Pokeblob(randomType, Math.floor(Math.random() * Math.random() * 100), 100, [attack], Math.floor(Math.random() * 13) as PokeblobSpikenessType);
        pokeglobs.push(pokeglob);
    }
    return pokeglobs;
}

function randomPokeglobCard(extraPokeblobs: boolean): PokeblobCard {
    let randomName = ["Bob", "Joe", "Steve", "John", "Sally", "Sue", "Jill", "Jack", "Jenny", "Jen"][Math.floor(Math.random() * 10)];
    let randomID = Math.random()
    let randomPokeglobsAmount = Math.floor(Math.random() * Math.random() * Math.random() * 10) + 1;
    return new PokeblobCard(randomName, randomID, "Me", randomPokeglob(extraPokeblobs ? randomPokeglobsAmount : 1));
}

export { randomAttack, randomPokeglob, randomPokeglobCard };

