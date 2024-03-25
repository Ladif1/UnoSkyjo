import { Skyjo } from '../models/skyjo';
import { SkyjoColor } from '../enum/cardColor';
import readlineSync from 'readline-sync';
import { SkyjoValue } from '../enum/cardValue';

describe('Skyjo', () => {
    describe('chooseCardColor', () => {
        it('should return selected card color when a valid choice is made', () => {
            // Mock user input
            const mockUserChoice = '1';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const selectedCardColor = Skyjo.chooseCardColor();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle couleur souhaitez-vous pour votre carte ?'));
            expect(selectedCardColor).toBe(SkyjoColor.Purple);
        });

        it('should return undefined when an invalid choice is made', () => {
            // Mock user input
            const mockUserChoice = '20';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const selectedCardColor = Skyjo.chooseCardColor();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle couleur souhaitez-vous pour votre carte ?'));
            expect(selectedCardColor).toBeUndefined();
        });
    });

    describe('chooseCardValue', () => {
        it('should return selected card value when a valid choice is made', () => {
            // Mock user input
            const mockUserChoice = '1';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const selectedCardValue = Skyjo.chooseCardValue();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle valeur souhaitez-vous pour votre carte ?'));
            expect(selectedCardValue).toBe(SkyjoValue.MinusTwo);
        });

        it('should return undefined when an invalid choice is made', () => {
            // Mock user input
            const mockUserChoice = '16';
            readlineSync.question = jest.fn().mockReturnValue(mockUserChoice);

            const selectedCardValue = Skyjo.chooseCardValue();

            expect(readlineSync.question).toHaveBeenCalledWith(expect.stringContaining('Quelle valeur souhaitez-vous pour votre carte ?'));
            expect(selectedCardValue).toBeUndefined();
        });
    });
});