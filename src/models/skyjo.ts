import { SkyjoColor } from '../enum/cardColor';
import { SkyjoValue } from '../enum/cardValue';
import { Card } from './card';
import * as readlineSync from 'readline-sync';
export class Skyjo extends Card {
    value: SkyjoValue;
    color: SkyjoColor;
    constructor(id: number, value: SkyjoValue, color: SkyjoColor, point: number) {
        super(id, value, color, point);
        this.value = value;
        this.color = color;
    }

    toString(): string {
        return `Carte Skyjo : ${this.value.toString()} de couleur ${SkyjoColor[this.color]}`;
    }

    // Getters
    getId(): number {
        return this.id;
    }
    getValue(): SkyjoValue {
        return this.value;
    }
    getColor(): SkyjoColor {
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

    static chooseCardColor(): SkyjoColor | undefined {
        const options = Object.keys(SkyjoColor)
            .filter(key => isNaN(Number(key)))
            .map((key, index) => `${index + 1}. ${key}`)
            .join('\n');

        let userChoice = readlineSync.question(`Quelle couleur souhaitez-vous pour votre carte ?\n${options}\n`);

        const choiceIndex = parseInt(userChoice) - 1;
        const colors = Object.keys(SkyjoColor).filter(key => isNaN(Number(key)));

        if (choiceIndex >= 0 && choiceIndex < colors.length) {
            const selectedColor = SkyjoColor[colors[choiceIndex] as keyof typeof SkyjoColor];
            console.log(`Vous avez choisi la couleur : ${colors[choiceIndex]} !`);
            return selectedColor;
        } else {
            console.log('Choix invalide. Veuillez sélectionner un numéro valide.');
            return undefined;
        }

    }

    static chooseCardValue(): SkyjoValue | undefined {

        const options = Object.keys(SkyjoValue)
            .filter(key => isNaN(Number(key)))
            .map((key, index) => `${index + 1}. ${key}`)
            .join('\n');

        let userChoice = readlineSync.question(`Quelle valeur souhaitez-vous pour votre carte ?\n${options}\n`);

        const choiceIndex = parseInt(userChoice) - 1;
        const values = Object.keys(SkyjoValue).filter(key => isNaN(Number(key)));

        if (choiceIndex >= 0 && choiceIndex < values.length) {
            const selectedValue = SkyjoValue[values[choiceIndex] as keyof typeof SkyjoValue];
            console.log(`Vous avez choisi la valeur : ${values[choiceIndex]} !`);
            return selectedValue;
        } else {
            console.log('Choix invalide. Veuillez sélectionner un numéro valide.');
            return undefined;
        }
    }

}