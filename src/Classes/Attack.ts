class Attack {
    attackName: string;
    attackDamage: number;
    attackCooldown: number;
    constructor(attackName: string, attackDamage: number, attackCooldown: number) {
        this.attackName = attackName;
        this.attackDamage = attackDamage;
        this.attackCooldown = attackCooldown;
    }
}

export { Attack };