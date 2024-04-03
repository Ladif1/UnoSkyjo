import { SkyjoColor, UnoColor } from '../enums/cardColor';
import { SkyjoValue, UnoValue } from '../enums/cardValue';
import { FilterCard } from '../models/actions/filterCard';
import { ListCard } from '../models/listCard';
import { Skyjo } from '../models/skyjo';
import { Uno } from '../models/uno';

describe('FilterCard', () => {
    let filterCard: FilterCard;

    beforeEach(() => {
        filterCard = new FilterCard();
        const listCard = new ListCard([
            new Uno(0, UnoValue.Zero, UnoColor.Black, 0),
            new Uno(1, UnoValue.One, UnoColor.Blue, 1),
            new Uno(2, UnoValue.Two, UnoColor.Green, 2),
            new Uno(3, UnoValue.Three, UnoColor.Red, 3),
            new Uno(4, UnoValue.Four, UnoColor.Yellow, 4),
            new Uno(5, UnoValue.Five, UnoColor.Black, 5),
            new Uno(6, UnoValue.Six, UnoColor.Blue, 6),
            new Uno(7, UnoValue.Seven, UnoColor.Green, 7),
            new Uno(8, UnoValue.Eight, UnoColor.Red, 8),
            new Skyjo(15, SkyjoValue.Eight, SkyjoColor.Yellow, 15),
            new Uno(9, UnoValue.Nine, UnoColor.Yellow, 9),
            new Uno(10, UnoValue.ChangeColor, UnoColor.Black, 10),
            new Uno(11, UnoValue.PlusTwo, UnoColor.Blue, 11),
            new Uno(12, UnoValue.Reverse, UnoColor.Green, 12),
            new Uno(13, UnoValue.PlusFour, UnoColor.Red, 13),
            new Uno(14, UnoValue.Pass, UnoColor.Yellow, 14),
        ]);
        filterCard.setListCards(listCard.getListCards());
    });

    describe('filterCardsByType', () => {
        it('should filter cards by type', () => {

            const filteredListCard = filterCard.filterCardsByType('uno');

            expect(filteredListCard.getListCards().length).toBe(15);
            expect(filteredListCard.getListCards()[0] instanceof Uno).toBe(true);
        });

    });
});