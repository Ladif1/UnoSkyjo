import { SkyjoColor } from '../enum/cardColor';
import { SkyjoValue } from '../enum/cardValue';
import { Card } from './card';
import * as readlineSync from 'readline-sync';
export class Skyjo extends Card {
    value: SkyjoValue = SkyjoValue.One;
    color: SkyjoColor = SkyjoColor.Red;
    constructor(id: number, value: SkyjoValue, color: SkyjoColor, point: number) {
        super(id, value, color, point);
    }

    static chooseCardColor(): SkyjoColor {
        while (true) {
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
            }
        }
    }

}