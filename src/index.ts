import { ListCard } from "./models/listCard";

async function main() {
    const listCard = new ListCard();
    await listCard.createCard();
}

main();