import { SkyjoColor, UnoColor } from '../enums/cardColor';
import { SkyjoValue, UnoValue } from '../enums/cardValue';
import { SortCard } from "../models/actions/sortCard";
import { ListCard } from '../models/listCard';
import { Skyjo } from '../models/skyjo';
import { Uno } from '../models/uno';

describe('SortCard', () => {
    let sortCard: SortCard;

    beforeEach(() => {
        sortCard = new SortCard();
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
        sortCard.setListCards(listCard.getListCards());
    });

    describe('sortCardsByType', () => {
        it('should sort cards by type', () => {

            const sortedCards = sortCard.sortCardsByType();

            expect(sortedCards.getListCards()[sortedCards.getListCards().length - 1]).toBeInstanceOf(Skyjo);
        });
    });

    describe('sortCardsByColor', () => {
        it('should sort cards by color', () => {

            const sortedCards = sortCard.sortCardsByColor();

            expect(sortedCards.getListCards()[0].getColor()).toBe(UnoColor.Red);
        });
    });

    describe('sortCardsByValue', () => {
        it('should sort cards by value', () => {

            const sortedCards = sortCard.sortCardsByValue();

            expect(sortedCards.getListCards()[0].getValue()).toBe(UnoValue.PlusTwo);
            expect(sortedCards.getListCards()[sortedCards.getListCards().length - 1].getValue()).toBe(UnoValue.Reverse);
        });
    });

    describe('getListCards', () => {
        it('should return the list of cards', () => {
            expect(sortCard.getListCards().length).toBe(16);
        });
    });

    // describe('askSortCard', () => {
    //     describe('when user choice is 1', () => {
    //         it('should sort cards by color', () => {
    //             const spy = jest.spyOn(console, 'log');
    //             const spyClear = jest.spyOn(console, 'clear');
    //             const spySortCardsByColor = jest.spyOn(sortCard, 'sortCardsByColor');

    //             sortCard.askSortCard(new ListCard(sortCard.getListCards()));

    //             expect(spy).toHaveBeenCalled();
    //             expect(spyClear).toHaveBeenCalled();
    //             expect(spySortCardsByColor).toHaveBeenCalled();

    //         });
    //     });
    // });
});