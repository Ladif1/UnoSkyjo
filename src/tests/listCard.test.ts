import { ListCard } from '../models/listCard';
import { CardType } from '../enum/cardType';
import { Uno } from '../models/uno';
import { Skyjo } from '../models/skyjo';
import { SkyjoValue, UnoValue } from '../enum/cardValue';
import readlineSync from 'readline-sync';

describe('ListCard', () => {
    let listCard: ListCard;

    beforeEach(() => {
        listCard = new ListCard();
    });

    describe('getListCards', () => {
        it('should return an empty array when no cards are created', () => {
            const cards = listCard.getListCards();
            expect(cards).toEqual([]);
        });

        it('should return the list of created cards', () => {
            const unoCard = new Uno(0, UnoValue.Zero, 0, 0);
            const skyjoCard = new Skyjo(0, SkyjoValue.Zero, 0, 0);
            listCard['listCards'] = [unoCard, skyjoCard];

            const cards = listCard.getListCards();
            expect(cards).toEqual([unoCard, skyjoCard]);
        });
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

        it('should not create a card', () => {
            const spyChooseCardType = jest.spyOn(listCard, 'chooseCardType').mockReturnValue(undefined);

            listCard.createCard();

            expect(spyChooseCardType).toHaveBeenCalled();
            expect(listCard.getListCards().length).toBe(0);

            spyChooseCardType.mockRestore();
        });
    });

    describe('chooseCardType', () => {
        it('should return selected card type when a valid choice is made', () => {
            // Mock user input
            const mockUserChoice = '1';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const selectedCardType = listCard.chooseCardType();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Que souhaitez-vous creer ?'));
            expect(selectedCardType).toBe(CardType.Uno);
        });

        it('should return undefined when an invalid choice is made', () => {
            // Mock user input
            const mockUserChoice = '5';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const selectedCardType = listCard.chooseCardType();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Que souhaitez-vous creer ?'));
            expect(selectedCardType).toBeUndefined();
        });
    });

    describe('ListCard', () => {
        // Existing code...

        describe('displayCards', () => {
            it('should display the list of created cards', () => {
                const unoCard = new Uno(0, UnoValue.Zero, 0, 0);
                const skyjoCard = new Skyjo(0, SkyjoValue.Zero, 0, 0);
                listCard['listCards'] = [unoCard, skyjoCard];

                const consoleSpy = jest.spyOn(console, 'log');
                listCard.displayCards();

                expect(consoleSpy).toHaveBeenCalledWith('Voici la liste des cartes créées :');
                expect(consoleSpy).toHaveBeenCalledWith(unoCard.toString());
                expect(consoleSpy).toHaveBeenCalledWith(skyjoCard.toString());

                consoleSpy.mockRestore();
            });
        });
    });
});