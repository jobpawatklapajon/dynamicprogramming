const {maximum, palindrom, sequence, sumInteger} = require('./index.js');

describe('maximum function', () => {
    it('input [1,2] should return 2', () => {
        expect(maximum([1, 2], 0)).toEqual(2);
    });

    it('input [1,5,7] should return 7', () => {
        expect(maximum([1, 5, 7], 0)).toEqual(7);
    });

    it('input [9,0,1,2,3] should return 9', () => {
        expect(maximum([9, 0, 1, 2, 3], 0)).toEqual(9);
    });
});

describe('palindrom function', () => {
    it('"aba" should return True', () => {
        expect(palindrom('aba', 0, 'aba'.length - 1)).toEqual(true);
    });

    it('"moon" should return False', () => {
        expect(palindrom('moon', 0, 'moon'.length - 1)).toEqual(false);
    })

    it('"daad" should return True', () => {
        expect(palindrom('daad', 0, 'daad'.length - 1)).toEqual(true);
    });
});

describe('sequence function', () => {
    it("input [2, 3, 4, 5, 6, 7] should return true", () => {
        expect(sequence([2, 3, 4, 5, 6, 7])).toEqual(true);
    });

    it("input [2, 4, 5, 6, 7] should return false", () => {
        expect(sequence([2, 4, 5, 6, 7])).toEqual(false);
    });

    it("input [1, 2, 3] should return true", () => {
        expect(sequence([1, 2, 3])).toEqual(true);
    });

    it("input [1, 3] should return false", () => {
        expect(sequence([1, 3])).toEqual(false);
    });
});

describe("sumInteger function", () => {
    it("input 123456 should return 21", () => {
        expect(sumInteger(123456)).toEqual(21);
    });
});