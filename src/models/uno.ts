import { Card } from './card';

export class Uno extends Card
{

    constructor(id: number, value: string, couleur:string, point: number) {
        super(id, value, couleur, point);
    }


    // Getters
    getId(): number {
        return this.id;
    }
    getValue(): string {
        return this.value;
    }
    getCouleur(): string {
        return this.couleur;
    }
    getPoint(): number {
        return this.point;
    }


    // Setters
    setId(id: number): void {
        this.id = id;
    }
    setValue(value: string): void {
        this.value = value;
    }
    setCouleur(couleur: string): void {
        this.couleur = couleur;
    }
    setPoint(point: number): void {
        this.point = point;
    }
}