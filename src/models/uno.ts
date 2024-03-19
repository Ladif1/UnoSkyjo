import { SkyjoColor, UnoColor } from '../enum/cardColor';
import { SkyjoValue, UnoValue } from '../enum/cardValue';
import { Card } from './card';

export class Uno extends Card {

    constructor(id: number, value: UnoValue, color: UnoColor | SkyjoColor, point: number) {
        super(id, value, color, point);
    }


    // Getters
    getId(): number {
        return this.id;
    }
    getValue(): UnoValue | SkyjoValue {
        return this.value;
    }
    getColor(): UnoColor | SkyjoColor {
        return this.color;
    }
    getPoint(): number {
        return this.point;
    }


    // Setters
    setId(id: number): void {
        this.id = id;
    }
    setValue(value: UnoValue | SkyjoValue): void {
        this.value = value;
    }
    setColor(color: UnoColor | SkyjoColor): void {
        this.color = color;
    }
    setPoint(point: number): void {
        this.point = point;
    }
}