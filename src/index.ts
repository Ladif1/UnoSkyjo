import { Card } from './models/card';
import * as readlineSync from 'readline-sync';
import { CardType } from './enum/cardType';

async function main() {
    const listCards: Card[] = [];
    let type: CardType;

    console.clear();

    console.log('Bienvenue dans le créateur de cartes !');

    let userChoice = readlineSync.question('Que souhaitez-vous créer ?\n1. Carte Uno\n2. Carte Skyjo\n');

    switch (userChoice) {
        case '1':
            console.log('Vous avez choisi de créer une carte Uno !');
            type = CardType.Uno;
            break;
        case '2':
            console.log('Vous avez choisi de créer une carte Skyjo !');
            type = CardType.Skyjo;
            break;
        default:
            console.log('Choix invalide. Veuillez sélectionner 1 ou 2.');
            return;
    }

}

main();