import { Card } from './card';
import * as readlineSync from 'readline-sync';
import { CardType } from '../enum/cardType';
import { UnoColor, SkyjoColor } from '../enum/cardColor';
import { UnoValue, SkyjoValue } from '../enum/cardValue';
import { Uno } from './uno';
import { Skyjo } from './skyjo';

export class ListCard {
    private listCards: Card[] = [];

    constructor() {
        this.listCards = [];
    }

    public createCard(): void {
        console.clear();

        console.log('Bienvenue dans le créateur de cartes !');

        let type = this.chooseCardType();
        if (type === undefined) {
            return;
        }

        let color = this.chooseCardColor(type);
        if (color === undefined) {
            return;
        }

        if (type === CardType.Uno) {
            this.listCards.push(new Uno(this.listCards.length, UnoValue.One, color, 0));
        }
    }

    chooseCardType(): CardType | undefined {
        const options = Object.keys(CardType)
            .filter(key => isNaN(Number(key)))
            .map((key, index) => `${index + 1}. ${key}`)
            .join('\n');

        let userChoice = readlineSync.question(`Que souhaitez-vous creer ?\n${options}\n`);

        const choiceIndex = parseInt(userChoice) - 1;
        const cardTypes = Object.keys(CardType).filter(key => isNaN(Number(key)));

        if (choiceIndex >= 0 && choiceIndex < cardTypes.length) {
            const selectedCardType = CardType[cardTypes[choiceIndex] as keyof typeof CardType];
            console.log(`Vous avez choisi de créer une carte de type : ${cardTypes[choiceIndex]} !`);
            return selectedCardType;
        } else {
            console.log('Choix invalide. Veuillez sélectionner un numéro valide.');
            return undefined;
        }
    }

    chooseCardColor(type: CardType): UnoColor | SkyjoColor | undefined {
        const options = Object.keys(type === CardType.Uno ? UnoColor : SkyjoColor)
            .filter(key => isNaN(Number(key)))
            .map((key, index) => `${index + 1}. ${key}`)
            .join('\n');

        let userChoice = readlineSync.question(`Quelle couleur souhaitez-vous pour votre carte ?\n${options}\n`);

        const choiceIndex = parseInt(userChoice) - 1;
        const colors = Object.keys(type === CardType.Uno ? UnoColor : SkyjoColor).filter(key => isNaN(Number(key)));

        if (choiceIndex >= 0 && choiceIndex < colors.length) {
            const selectedColor = UnoColor[colors[choiceIndex] as keyof typeof UnoColor];
            console.log(`Vous avez choisi la couleur : ${colors[choiceIndex]} !`);
            return selectedColor;
        } else {
            console.log('Choix invalide. Veuillez sélectionner un numéro valide.');
            return undefined;
        }
    }
}
