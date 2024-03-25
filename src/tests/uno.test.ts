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

    describe('getter and setter', () => {
        it('should return the value of the card', () => {
            const uno = new Uno(1, UnoValue.Zero, UnoColor.Red, 0);

            expect(uno.getValue()).toBe(UnoValue.Zero);
        });

        it('should return the color of the card', () => {
            const uno = new Uno(1, UnoValue.Zero, UnoColor.Red, 0);

            expect(uno.getColor()).toBe(UnoColor.Red);
        });

        it('should return the point of the card', () => {
            const uno = new Uno(1, UnoValue.Zero, UnoColor.Red, 0);

            expect(uno.getPoint()).toBe(0);
        });

        it('should set the value of the card', () => {
            const uno = new Uno(1, UnoValue.Zero, UnoColor.Red, 0);
            uno.setValue(UnoValue.One);

            expect(uno.getValue()).toBe(UnoValue.One);
        });

        it('should set the color of the card', () => {
            const uno = new Uno(1, UnoValue.Zero, UnoColor.Red, 0);
            uno.setColor(UnoColor.Blue);

            expect(uno.getColor()).toBe(UnoColor.Blue);
        });

        it('should set the point of the card', () => {
            const uno = new Uno(1, UnoValue.Zero, UnoColor.Red, 0);
            uno.setPoint(10);

            expect(uno.getPoint()).toBe(10);
        });

        it('should return the id of the card', () => {
            const uno = new Uno(1, UnoValue.Zero, UnoColor.Red, 0);

            expect(uno.getId()).toBe(1);
        });

        it('should set the id of the card', () => {
            const uno = new Uno(1, UnoValue.Zero, UnoColor.Red, 0);
            uno.setId(10);

            expect(uno.getId()).toBe(10);
        });

        it('should return the string representation of the card', () => {
            const uno = new Uno(1, UnoValue.Zero, UnoColor.Red, 0);

            expect(uno.toString()).toBe('Carte Uno : 0 de couleur Red');
        });
    });
});