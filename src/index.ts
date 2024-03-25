import { ListCard } from "./models/listCard";
import readlineSync from "readline-sync";
export async function main() {
    const listCard = new ListCard();
    let userChoice = readlineSync.question('Combien de cartes voulez-vous creer ?\n');
    let choiceIndex = parseInt(userChoice);
    for (let i = 0; i < choiceIndex; i++) {
        await listCard.createCard();
    }
    listCard.displayCards();
}

main();