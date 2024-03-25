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
}