import { Uno } from '../models/uno';
import { UnoColor } from '../enum/cardColor';
import readlineSync from 'readline-sync';
import { UnoValue } from '../enum/cardValue';

describe('Uno', () => {
    describe('chooseCardColor', () => {
        it('should return selected card color when a valid choice is made', () => {
            // Mock user input
            const mockUserChoice = '1';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const selectedCardColor = Uno.chooseCardColor();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle couleur souhaitez-vous pour votre carte ?'));
            expect(selectedCardColor).toBe(UnoColor.Red);
        });

        it('should return undefined when an invalid choice is made', () => {
            // Mock user input
            const mockUserChoice = '20';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const selectedCardColor = Uno.chooseCardColor();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle couleur souhaitez-vous pour votre carte ?'));
            expect(selectedCardColor).toBeUndefined();
        });
    });
    describe('Uno', () => {
        describe('chooseCardColor', () => {
            it('should return selected card color when a valid choice is made', () => {
                // Mock user input
                const mockUserChoice = '1';
                readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

                const selectedCardColor = Uno.chooseCardColor();

                expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle couleur souhaitez-vous pour votre carte ?'));
                expect(selectedCardColor).toBe(UnoColor.Red);
            });

            it('should return undefined when an invalid choice is made', () => {
                // Mock user input
                const mockUserChoice = '16';
                readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

                const selectedCardColor = Uno.chooseCardColor();

                expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle couleur souhaitez-vous pour votre carte ?'));
                expect(selectedCardColor).toBeUndefined();
            });
        });

        describe('chooseCardValue', () => {
            it('should return selected card value when a valid choice is made', () => {
                // Mock user input
                const mockUserChoice = '1';
                readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

                const selectedCardValue = Uno.chooseCardValue();

                expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle valeur souhaitez-vous pour votre carte ?'));
                expect(selectedCardValue).toBe(UnoValue.Zero);
            });

            it('should return undefined when an invalid choice is made', () => {
                // Mock user input
                const mockUserChoice = '16';
                readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

                const selectedCardValue = Uno.chooseCardValue();

                expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle valeur souhaitez-vous pour votre carte ?'));
                expect(selectedCardValue).toBeUndefined();
            });
        });
    });
});