import { Card } from './card';
import * as readlineSync from 'readline-sync';
import { CardType } from '../enum/cardType';
import { Uno } from './uno';
import { Skyjo } from './skyjo';

export class ListCard {
    private listCards: Card[] = [];

    constructor() {
        this.listCards = [];
    }

    public getListCards(): Card[] {
        return this.listCards;
    }

    public createCard(): void {
        console.clear();

        console.log('Bienvenue dans le créateur de cartes !');

        let type = this.chooseCardType();
        if (type === undefined) {
            return;
        }

        if (type === CardType.Uno) {
            let color = undefined;
            while (color === undefined) {
                color = Uno.chooseCardColor();
            }
            let value = undefined;
            while (value === undefined) {
                value = Uno.chooseCardValue();
            }
            const UnoCard = new Uno(this.listCards.length, value, color, 0);
            this.listCards.push(UnoCard);
        } else if (type === CardType.Skyjo) {
            let color = undefined;
            while (color === undefined) {
                color = Skyjo.chooseCardColor();
            }
            let value = undefined;
            while (value === undefined) {
                value = Skyjo.chooseCardValue();
            }
            this.listCards.push(new Skyjo(this.listCards.length, value, color, 0));
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

    displayCards(): void {
        console.clear();
        console.log('Voici la liste des cartes créées :');
        this.listCards.forEach(card => {
            console.log(card.toString());
        });
    }
}
