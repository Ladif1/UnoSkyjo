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

    describe('getter and setter', () => {
        it('should return the value of the card', () => {
            const skyjo = new Skyjo(1, SkyjoValue.MinusTwo, SkyjoColor.Purple, 0);

            expect(skyjo.getValue()).toBe(SkyjoValue.MinusTwo);
        });

        it('should return the color of the card', () => {
            const skyjo = new Skyjo(1, SkyjoValue.MinusTwo, SkyjoColor.Purple, 0);

            expect(skyjo.getColor()).toBe(SkyjoColor.Purple);
        });

        it('should return the point of the card', () => {
            const skyjo = new Skyjo(1, SkyjoValue.MinusTwo, SkyjoColor.Purple, 0);

            expect(skyjo.getPoint()).toBe(0);
        });

        it('should set the value of the card', () => {
            const skyjo = new Skyjo(1, SkyjoValue.MinusTwo, SkyjoColor.Purple, 0);
            skyjo.setValue(SkyjoValue.Two);

            expect(skyjo.getValue()).toBe(SkyjoValue.Two);
        });

        it('should set the color of the card', () => {
            const skyjo = new Skyjo(1, SkyjoValue.MinusTwo, SkyjoColor.Purple, 0);
            skyjo.setColor(SkyjoColor.Yellow);

            expect(skyjo.getColor()).toBe(SkyjoColor.Yellow);
        });

        it('should set the point of the card', () => {
            const skyjo = new Skyjo(1, SkyjoValue.MinusTwo, SkyjoColor.Purple, 0);
            skyjo.setPoint(10);

            expect(skyjo.getPoint()).toBe(10);
        });

        it('should set the id of the card', () => {
            const skyjo = new Skyjo(1, SkyjoValue.MinusTwo, SkyjoColor.Purple, 0);
            skyjo.setId(10);

            expect(skyjo.getId()).toBe(10);
        });

        it('should return the id of the card', () => {
            const skyjo = new Skyjo(1, SkyjoValue.MinusTwo, SkyjoColor.Purple, 0);

            expect(skyjo.getId()).toBe(1);
        });

        it('should return the string representation of the card', () => {
            const skyjo = new Skyjo(1, SkyjoValue.MinusTwo, SkyjoColor.Purple, 0);

            expect(skyjo.toString()).toBe('Carte Skyjo : -2 de couleur Purple');
        });
    });
});