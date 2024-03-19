import { Card } from './card';

export class Skyjo extends Card {
    constructor(id: number, value: string, color: string, point: number) {
        super(id, value, color, point);
    }


    // Getters
    getId(): number {
        return this.id;
    }
    getValue(): string {
        return this.value;
    }
    getColor(): string {
        return this.color;
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
    setColor(color: string): void {
        this.color = color;
    }
    setPoint(point: number): void {
        this.point = point;
    }

}