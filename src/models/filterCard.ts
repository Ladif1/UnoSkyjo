import { Card } from "./card";
import * as readlineSync from 'readline-sync';
import { Uno } from "./uno";
import { Skyjo } from "./skyjo";
import { SkyjoColor, UnoColor } from "../enums/cardColor";
import { SkyjoValue, UnoValue } from "../enums/cardValue";

export class FilterCard {
    private listCards: Card[] = [];
    constructor(listCards: Card[]) {
        this.listCards = listCards;
    }

    askFilterCard(): void {
        console.clear();
        console.log('Voulez-vous rechercher un de vos cartes ?');

        let userChoice = readlineSync.question(`1. Oui\n2. Non\n`);
        const choiceIndex = parseInt(userChoice);
        if (choiceIndex === 1) {
            console.clear();
            console.log('Que voulez-vous chercher ?');
            userChoice = readlineSync.question(`1. Couleur\n2. Valeur\n3.Type\n`);
            const choiceFilter = parseInt(userChoice);
            switch (choiceFilter) {
                case 1:
                    console.clear();
                    userChoice = readlineSync.question(`Couleur :`);
                    this.filterCardsByColor(userChoice);
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
                    userChoice = readlineSync.question(`Valeur :`);
                    this.filterCardsByValue(userChoice);
                    break;
                case 3:
                    console.clear();
                    userChoice = readlineSync.question(`Uno ou Skyjo :`);
                    this.filterCardsByType(userChoice.toString());
                    break;
                default:
                    console.log('Choix invalide. Veuillez sélectionner un numéro valide.');
                    return;
            }
        } else {
            return;
        }
    }

    filterCardsByType(type: string): void {
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

        this.listCards = tempCards;
        for (const card of this.listCards) {
            console.log(card.toString());
        }
    }

    filterCardsByColor(color: string): void {
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

        this.listCards = tempCards;
        for (const card of this.listCards) {
            console.log(card.toString());
        }
    }



    filterCardsByValue(value: string): void {
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

        this.listCards = tempCards;
        for (const card of this.listCards) {
            console.log(card.toString());
        }
    }
}