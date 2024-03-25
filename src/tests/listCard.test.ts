import { ListCard } from '../models/listCard';
import { CardType } from '../enum/cardType';
import { Uno } from '../models/uno';
import { Skyjo } from '../models/skyjo';
import { SkyjoValue, UnoValue } from '../enum/cardValue';
import { SkyjoColor, UnoColor } from '../enum/cardColor';
describe('ListCard', () => {
    let listCard: ListCard;

    beforeEach(() => {
        listCard = new ListCard();
    });

    describe('createCard', () => {
        it('should create a Uno card', () => {
            const spyChooseCardType = jest.spyOn(listCard, 'chooseCardType').mockReturnValue(CardType.Uno);
            const spyUnoChooseCardColor = jest.spyOn(Uno, 'chooseCardColor').mockReturnValue(0);
            const spyUnoChooseCardValue = jest.spyOn(Uno, 'chooseCardValue').mockReturnValue(UnoValue.Zero);

            listCard.createCard();

            expect(spyChooseCardType).toHaveBeenCalled();
            expect(spyUnoChooseCardColor).toHaveBeenCalled();
            expect(spyUnoChooseCardValue).toHaveBeenCalled();
            expect(listCard.getListCards().length).toBe(1);
            expect(listCard.getListCards()[0] instanceof Uno).toBe(true);

            spyChooseCardType.mockRestore();
            spyUnoChooseCardColor.mockRestore();
            spyUnoChooseCardValue.mockRestore();
        });

        it('should create a Skyjo card', () => {
            const spyChooseCardType = jest.spyOn(listCard, 'chooseCardType').mockReturnValue(CardType.Skyjo);
            const spySkyjoChooseCardColor = jest.spyOn(Skyjo, 'chooseCardColor').mockReturnValue(0);
            const spySkyjoChooseCardValue = jest.spyOn(Skyjo, 'chooseCardValue').mockReturnValue(SkyjoValue.Zero);

            listCard.createCard();

            expect(spyChooseCardType).toHaveBeenCalled();
            expect(spySkyjoChooseCardColor).toHaveBeenCalled();
            expect(spySkyjoChooseCardValue).toHaveBeenCalled();
            expect(listCard.getListCards().length).toBe(1);
            expect(listCard.getListCards()[0] instanceof Skyjo).toBe(true);

            spyChooseCardType.mockRestore();
            spySkyjoChooseCardColor.mockRestore();
            spySkyjoChooseCardValue.mockRestore();
        });
    });
});
