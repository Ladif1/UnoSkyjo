import { SkyjoColor, UnoColor } from "../enums/cardColor";
import { SkyjoValue, UnoValue } from "../enums/cardValue";
import { CardOperations } from "../interfaces/cardOperations";

export abstract class Card implements CardOperations {
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

    abstract toString(): string;

    abstract getColor(): SkyjoColor | UnoColor;

    abstract getValue(): SkyjoValue | UnoValue;

}