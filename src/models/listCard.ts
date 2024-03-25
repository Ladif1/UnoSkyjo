import { Card } from './card';
import * as readlineSync from 'readline-sync';
import { CardType } from '../enum/cardType';
import { UnoValue, SkyjoValue } from '../enum/cardValue';
import { Uno } from './uno';
import { Skyjo } from './skyjo';
import { UnoColor } from '../enum/cardColor';

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

        if (type === CardType.Uno) {
            let color = Uno.chooseCardColor();
            const UnoCard = new Uno(this.listCards.length, UnoValue.One, color, 0);
            this.listCards.push(UnoCard);
        } else if (type === CardType.Skyjo) {
            let color = Skyjo.chooseCardColor();
            this.listCards.push(new Skyjo(this.listCards.length, SkyjoValue.One, color, 0));
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
}
