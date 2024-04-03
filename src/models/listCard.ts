import { Card } from './card';
import * as readlineSync from 'readline-sync';
import { CardType } from '../enums/cardType';
import { Uno } from './uno';
import { Skyjo } from './skyjo';
import { SortCard } from './sortCard';
import { FilterCard } from './filterCard';

export class ListCard {
    private listCards: Card[] = [];
    private sortCard: SortCard = new SortCard(this.listCards);
    private filterCard: FilterCard = new FilterCard(this.listCards);

    constructor() {
        this.listCards = [];
    }

    public getListCards(): Card[] {
        return this.listCards;
    }

    public createCard(): void {
        console.log('\nBienvenue dans le créateur de cartes !');

        const type = this.chooseCardType();
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

        const userChoice = readlineSync.question(`Que souhaitez-vous creer ?\n${options}\n`);

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
        this.sortCard.askSortCard();
        this.filterCard.askFilterCard();
    }




    // filterCardsByColor(): void {
    //     this.listCards.filter(card => card.getColor() === color);
    // }

    // filterCardsByValue(): void {
    //     this.listCards.filter(card => card.getValue() === value);
    // }
}
