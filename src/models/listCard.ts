import { Card } from './card';
import * as readlineSync from 'readline-sync';
import { CardType } from '../enums/cardType';
import { Uno } from './uno';
import { Skyjo } from './skyjo';
import { SortCard } from './actions/sortCard';
import { FilterCard } from './actions/filterCard';

export class ListCard {
    private listCards: Card[] = [];

    constructor(ListCards: Card[] = []) {
        this.listCards = ListCards;
    }
    public getListCards(): Card[] {
        return this.listCards;
    }

    public createCard(): void {
        console.log('\nBienvenue dans le créateur de cartes !');

        const type = this.chooseCardType();
        if (type === undefined) {
            throw new Error('Type de carte invalide.');
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
        } else {
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
            return undefined;
        }
    }

    displayCards(): void {
        console.clear();
        console.log('Voici la liste des cartes :');
        for (const card of this.listCards) {
            console.log(card.toString());
        }
        console.log('\n\n');
    }

    showMenu(): void {
        const sortCard = new SortCard();
        const filterCard = new FilterCard();
        for (; ;) {
            console.log('Que souhaitez-vous faire ?');
            const userChoice = readlineSync.question(`\n1. Creer une carte\n2. Afficher les cartes\n3. Trier les cartes\n4. Filtrer les cartes\n5. Quitter\n`);

            switch (parseInt(userChoice)) {
                case 1:

                    this.createCard();
                    break;
                case 2:
                    this.displayCards();
                    break;
                case 3:
                    sortCard.askSortCard(this);
                    break;
                case 4:
                    filterCard.askFilterCard(this);
                    break;
                case 5:
                    console.log('Merci d\'avoir utilisé le créateur de cartes !');
                    process.exit(0);
                    break;
                default:
                    console.log('Choix invalide. Veuillez sélectionner un numéro valide.');
                    break;
            }
        }
    }
}
