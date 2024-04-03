import { Card } from "../card";
import * as readlineSync from 'readline-sync';
import { Uno } from "../uno";
import { Skyjo } from "../skyjo";
import { SkyjoColor, UnoColor } from "../../enums/cardColor";
import { SkyjoValue, UnoValue } from "../../enums/cardValue";
import { ListCard } from "../listCard";

export class FilterCard {
    private listCards: Card[] = [];
    constructor() {

    }

    askFilterCard(listCard: ListCard): void {
        this.listCards = [...listCard.getListCards()];

        console.clear();
        console.log('Que voulez-vous chercher ?');
        let userChoice = readlineSync.question(`1. Couleur\n2. Valeur\n3. Type\n`);
        const choiceFilter = parseInt(userChoice);
        switch (choiceFilter) {
            case 1:
                console.clear();
                userChoice = readlineSync.question(`Couleur : `);
                this.filterCardsByColor(userChoice).displayCards();
                break;
            case 2:
                console.clear();
                console.log('UnoValue :');
                for (const key in UnoValue) {
                    if (isNaN(Number(key))) {
                        console.log(`${key}: ${UnoValue[key as keyof typeof UnoValue]}`);
                    }
                }
                console.log('SkyjoValue :');
                for (const key in SkyjoValue) {
                    if (isNaN(Number(key))) {
                        console.log(`${key}: ${SkyjoValue[key as keyof typeof SkyjoValue]}`);
                    }
                }
                userChoice = readlineSync.question(`Valeur : `);
                this.filterCardsByValue(userChoice).displayCards();
                break;
            case 3:
                console.clear();
                userChoice = readlineSync.question(`Uno ou Skyjo : `);
                this.filterCardsByType(userChoice).displayCards();
                break;
            default:
                console.log('Choix invalide. Veuillez sélectionner un numéro valide.');
        }

    }

    filterCardsByType(type: string): ListCard {
        const tempCards: Card[] = [];

        if (type.toLocaleLowerCase() == "uno" || type.toLocaleLowerCase() == "skyjo") {
            for (const card of this.listCards) {
                if (card instanceof Uno && type.toLocaleLowerCase() == "uno") {
                    tempCards.push(card);
                } else if (card instanceof Skyjo && type.toLocaleLowerCase() == "skyjo") {
                    tempCards.push(card);
                }
            }
        } else {
            console.log(`"${type}" n'est pas un type valide.`);

        }

        return new ListCard(tempCards);
    }

    filterCardsByColor(color: string): ListCard {
        const tempCards: Card[] = [];

        if (color in UnoColor || color in SkyjoColor) {
            for (const card of this.listCards) {
                if (card.getColor() === UnoColor[color as keyof typeof UnoColor] || card.getColor() === SkyjoColor[color as keyof typeof SkyjoColor]) {
                    tempCards.push(card);
                }
            }
        } else {
            console.log(`"${color}" n'est pas une couleur valide.`);

        }

        return new ListCard(tempCards);
    }



    filterCardsByValue(value: string): ListCard {
        const tempCards: Card[] = [];

        if (value in UnoValue || value in SkyjoValue) {
            for (const card of this.listCards) {
                if (card.getValue() === UnoValue[value as keyof typeof UnoValue] || card.getValue() === SkyjoValue[value as keyof typeof SkyjoValue]) {
                    tempCards.push(card);
                }
            }
        } else {
            console.log(`"${value}" n'est pas une valeur valide.`);
        }

        return new ListCard(tempCards);
    }
}