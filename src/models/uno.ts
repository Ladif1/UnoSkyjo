import { UnoColor } from '../enum/cardColor';
import { UnoValue } from '../enum/cardValue';
import { Card } from './card';
import * as readlineSync from 'readline-sync';

export class Uno extends Card {
    value: UnoValue = UnoValue.One;
    color: UnoColor = UnoColor.Red;
    constructor(id: number, value: UnoValue, color: UnoColor, point: number) {
        super(id, value, color, point);
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
}