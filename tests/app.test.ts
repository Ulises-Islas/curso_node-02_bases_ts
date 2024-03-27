// AAA -> Arrange, Act, Assert

describe('Test in App File', () => {
    test('should be 15', () => {

        // 1.- Arrange
        const num1 = 10;
        const num2 = 5;

        // 2.- Act
        const result = num1 + num2;

        // 3.- Assert
        expect(result).toBe(15);
    });
});