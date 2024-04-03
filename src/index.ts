import { ListCard } from "./models/listCard";
import readlineSync from "readline-sync";
export async function main() {
    console.clear();
    const listCard = new ListCard();
    const userChoice = readlineSync.question('Combien de cartes voulez-vous creer ?\n');
    const choiceIndex = parseInt(userChoice);
    console.clear();

    try {
        for (let i = 0; i < choiceIndex; i++) {
            await listCard.createCard();
            console.clear();
            listCard.displayCards();
        }
    } catch (error) {
        console.clear();
        console.log((error as Error).message);
    }

    listCard.showMenu();
}

main();