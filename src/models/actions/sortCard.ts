import { Card } from "../card";
import * as readlineSync from 'readline-sync';
import { Uno } from "../uno";
import { Skyjo } from "../skyjo";
import { ListCard } from "../listCard";

export class SortCard {
    private listCards: Card[] = [];

    constructor() {

    }

    askSortCard(listCard: ListCard): void {
        // Create a copy of the list of cards
        this.listCards = [...listCard.getListCards()];
        console.clear();
        console.log('Comment voulez-vous les trier ?');
        const userChoice = readlineSync.question(`1. Couleur\n2. Valeur\n3. Type\n`);
        const choiceFilter = parseInt(userChoice);
        switch (choiceFilter) {
            case 1:
                console.clear();
                console.log('Trie par couleur :');
                this.sortCardsByColor();
                break;
            case 2:
                console.clear();
                console.log('Trie par valeur :');
                this.sortCardsByValue();
                break;
            case 3:
                console.clear();
                console.log('Trie par type :');
                this.sortCardsByType();
                break;
            default:
                console.log('Choix invalide. Veuillez sélectionner un numéro valide.');
                return;
        }
    }

    /**
     * Sort the cards by type, Uno first and Skyjo after
     */
    sortCardsByType(): void {
        const unoCards: Uno[] = [];
        const skyjoCards: Skyjo[] = [];

        for (const card of this.listCards) {
            if (card instanceof Uno) {
                unoCards.push(card);
            } else if (card instanceof Skyjo) {
                skyjoCards.push(card);
            }
        }

        // Add to the list of cards the Uno cards first and the Skyjo cards after
        this.listCards = [...unoCards, ...skyjoCards]
        for (const card of this.listCards) {
            console.log(card.toString());
        }
    }

    sortCardsByColor(): void {
        this.listCards.sort((a, b) => {
            if (a.getColor() < b.getColor()) {
                return -1;
            }
            if (a.getColor() > b.getColor()) {
                return 1;
            }
            return 0;
        });
        for (const card of this.listCards) {
            console.log(card.toString());
        }
    }

    sortCardsByValue(): void {
        this.listCards.sort((a, b) => {
            if (a.getValue() < b.getValue()) {
                return -1;
            }
            if (a.getValue() > b.getValue()) {
                return 1;
            }
            return 0;
        });
        for (const card of this.listCards) {
            console.log(card.toString());
        }
    }

}