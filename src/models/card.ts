export abstract class Card {
    id: number;
    value: string;
    color: string;
    point: number;
    constructor(id: number, value: string, color: string, point: number) {
        this.id = id;
        this.value = value;
        this.color = color;
        this.point = point;
    }
}