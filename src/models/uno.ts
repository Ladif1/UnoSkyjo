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