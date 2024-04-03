import { ListCard } from '../models/listCard';
import { CardType } from '../enums/cardType';
import { Uno } from '../models/uno';
import { Skyjo } from '../models/skyjo';
import { SkyjoValue, UnoValue } from '../enums/cardValue';
import readlineSync from 'readline-sync';
import { SkyjoColor, UnoColor } from '../enums/cardColor';
import { SortCard } from '../models/actions/sortCard';
import { FilterCard } from '../models/actions/filterCard';

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
            const unoCard = new Uno(0, UnoValue.Zero, UnoColor.Black, 0);
            const skyjoCard = new Skyjo(0, SkyjoValue.Zero, SkyjoColor.Blue, 0);
            listCard['listCards'] = [unoCard, skyjoCard];

            const cards = listCard.getListCards();
            expect(cards).toEqual([unoCard, skyjoCard]);
        });
    });

    describe('createCard', () => {
        it('should create a Uno card', () => {
            const spyChooseCardType = jest.spyOn(listCard, 'chooseCardType').mockReturnValue(CardType.Uno);
            const spyUnoChooseCardColor = jest.spyOn(Uno, 'chooseCardColor').mockReturnValue(UnoColor.Black);
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
            const spySkyjoChooseCardColor = jest.spyOn(Skyjo, 'chooseCardColor').mockReturnValue(SkyjoColor.Blue);
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

            expect(() => listCard.createCard()).toThrow('Type de carte invalide.');

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
        describe('displayCards', () => {
            it('should display the list of created cards', () => {
                const unoCard = new Uno(0, UnoValue.Zero, UnoColor.Black, 0);
                const skyjoCard = new Skyjo(0, SkyjoValue.Zero, SkyjoColor.Blue, 0);
                listCard['listCards'] = [unoCard, skyjoCard];

                const consoleSpy = jest.spyOn(console, 'log');
                listCard.displayCards();

                expect(consoleSpy).toHaveBeenCalledWith('Voici la liste des cartes :');
                expect(consoleSpy).toHaveBeenCalledWith(unoCard.toString());
                expect(consoleSpy).toHaveBeenCalledWith(skyjoCard.toString());

                consoleSpy.mockRestore();
            });
        });
    });

    describe('showMenu', () => {
        it('should create a card when user choice is 1', () => {
            const mockUserChoice = '1';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const createCardSpy = jest.spyOn(listCard, 'createCard');

            listCard.showMenu();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle couleur souhaitez-vous pour votre carte ?'));
            expect(createCardSpy).toHaveBeenCalled();

            createCardSpy.mockRestore();
        });

        it('should display cards when user choice is 2', () => {
            const mockUserChoice = '2';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const displayCardsSpy = jest.spyOn(listCard, 'displayCards');

            listCard.showMenu();

            expect(displayCardsSpy).toHaveBeenCalled();

            displayCardsSpy.mockRestore();
        });

        it('should sort cards when user choice is 3', () => {
            const mockUserChoice = '3';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const sortCardSpy = jest.spyOn(SortCard.prototype, 'askSortCard');

            listCard.showMenu();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('1. Couleur'));
            expect(sortCardSpy).toHaveBeenCalledWith(listCard);

            sortCardSpy.mockRestore();
        });

        it('should filter cards when user choice is 4', () => {
            const mockUserChoice = '4';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const filterCardSpy = jest.spyOn(FilterCard.prototype, 'askFilterCard');

            listCard.showMenu();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('1. Couleur'));
            expect(filterCardSpy).toHaveBeenCalledWith(listCard);

            filterCardSpy.mockRestore();
        });

        it('should exit when user choice is 5', () => {
            const mockUserChoice = '5';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const consoleSpy = jest.spyOn(console, 'log');

            listCard.showMenu();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('1. Creer une carte'));
            expect(consoleSpy).toHaveBeenCalledWith('Merci d\'avoir utilisé le créateur de cartes !');

            consoleSpy.mockRestore();
        });

        it('should display error message when user choice is invalid', () => {
            const mockUserChoice = '6';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const consoleSpy = jest.spyOn(console, 'log');

            listCard.showMenu();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('1. Creer une carte'));
            expect(consoleSpy).toHaveBeenCalledWith('Choix invalide. Veuillez sélectionner un numéro valide.');

            consoleSpy.mockRestore();
        });
    });
});