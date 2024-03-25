import { UnoColor } from '../enum/cardColor';
import { UnoValue } from '../enum/cardValue';
import { Card } from './card';
import * as readlineSync from 'readline-sync';

export class Uno extends Card {
    value: UnoValue;
    color: UnoColor;
    constructor(id: number, value: UnoValue, color: UnoColor, point: number) {
        super(id, value, color, point);
        this.value = value;
        this.color = color;
    }

    toString(): string {
        return `Carte Uno : ${this.value.toString()} de couleur ${UnoColor[this.color]}`;
    }

    // Getters
    getId(): number {
        return this.id;
    }
    getValue(): UnoValue {
        return this.value;
    }
    getColor(): UnoColor {
        return this.color;
    }
    getPoint(): number {
        return this.point;
    }


    // Setters
    setId(id: number): void {
        this.id = id;
    }
    setValue(value: UnoValue): void {
        this.value = value;
    }
    setColor(color: UnoColor): void {
        this.color = color;
    }
    setPoint(point: number): void {
        this.point = point;
    }

    static chooseCardColor(): UnoColor {
        while (true) {
            const options = Object.keys(UnoColor)
                .filter(key => isNaN(Number(key)))
                .map((key, index) => `${index + 1}. ${key}`)
                .join('\n');

            let userChoice = readlineSync.question(`Quelle couleur souhaitez-vous pour votre carte ?\n${options}\n`);

            const choiceIndex = parseInt(userChoice) - 1;
            const colors = Object.keys(UnoColor).filter(key => isNaN(Number(key)));

            if (choiceIndex >= 0 && choiceIndex < colors.length) {
                const selectedColor = UnoColor[colors[choiceIndex] as keyof typeof UnoColor];
                console.log(`Vous avez choisi la couleur : ${colors[choiceIndex]} !`);
                return selectedColor;
            } else {
                console.log('Choix invalide. Veuillez sélectionner un numéro valide.');
            }
        }
    }

    static chooseCardValue(): UnoValue {
        while (true) {
            const options = Object.keys(UnoValue)
                .filter(key => isNaN(Number(key)))
                .map((key, index) => `${index + 1}. ${key}`)
                .join('\n');

            let userChoice = readlineSync.question(`Quelle valeur souhaitez-vous pour votre carte ?\n${options}\n`);

            const choiceIndex = parseInt(userChoice) - 1;
            const values = Object.keys(UnoValue).filter(key => isNaN(Number(key)));

            if (choiceIndex >= 0 && choiceIndex < values.length) {
                const selectedValue = UnoValue[values[choiceIndex] as keyof typeof UnoValue];
                console.log(`Vous avez choisi la valeur : ${values[choiceIndex]} !`);
                return selectedValue;
            } else {
                console.log('Choix invalide. Veuillez sélectionner un numéro valide.');
            }
        }
    }
}