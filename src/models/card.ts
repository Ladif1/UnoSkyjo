import { SkyjoColor, UnoColor } from "../enum/cardColor";
import { SkyjoValue, UnoValue } from "../enum/cardValue";

export abstract class Card {
    id: number;
    value: SkyjoValue | UnoValue;
    color: SkyjoColor | UnoColor;
    point: number;
    constructor(id: number, value: SkyjoValue | UnoValue, color: SkyjoColor | UnoColor, point: number) {
        this.id = id;
        this.value = value;
        this.color = color;
        this.point = point;
    }


    // Getters
    getId(): number {
        return this.id;
    }
    getValue(): SkyjoValue | UnoValue {
        return this.value;
    }
    getColor(): SkyjoColor | UnoColor {
        return this.color;
    }
    getPoint(): number {
        return this.point;
    }


    // Setters
    setId(id: number): void {
        this.id = id;
    }
    setValue(value: SkyjoValue): void {
        this.value = value;
    }
    setColor(color: SkyjoColor): void {
        this.color = color;
    }
    setPoint(point: number): void {
        this.point = point;
    }
}