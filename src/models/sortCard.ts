import { Card } from "./card";
import * as readlineSync from 'readline-sync';
import { Uno } from "./uno";
import { Skyjo } from "./skyjo";

export class SortCard {
    private listCards: Card[] = [];
    constructor() { }

    public setListCards(listCards: Card[]): void {
        this.listCards = listCards;
    }

    askSortCard(): void {
        console.clear();
        console.log('Voulez-vous trier vos cartes ?');

        let userChoice = readlineSync.question(`1. Oui\n2. Non\n`);
        const choiceIndex = parseInt(userChoice);
        if (choiceIndex === 1) {
            console.clear();
            console.log('Comment voulez-vous les trier ?');
            userChoice = readlineSync.question(`1. Couleur\n2. Valeur\n3.Type\n`);
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
        } else {
            return
        }
    }


    sortCardsByType(): void {
        let unoCards: Uno[] = [];
        let skyjoCards: Skyjo[] = [];

        for (let card of this.listCards) {
            if (card instanceof Uno) {
                unoCards.push(card);
            } else if (card instanceof Skyjo) {
                skyjoCards.push(card);
            }
        }

        this.listCards = [...unoCards, ...skyjoCards]
        for (let card of this.listCards) {
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
        for (let card of this.listCards) {
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
        for (let card of this.listCards) {
            console.log(card.toString());
        }
    }

}