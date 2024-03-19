export abstract class Card {
    id: number;
    value: string;
    couleur: string;
    point: number;
    constructor(id: number, value: string, couleur: string, point: number) {
        this.id = id;
        this.value = value;
        this.couleur = couleur;
        this.point = point;
    }
}