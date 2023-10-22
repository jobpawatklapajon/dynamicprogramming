const {permutation, combination} = require('./backtrack.js');

describe("permutation function", () => {
    it("input 'a' should return  ['a']", () => {
        const result = permutation('a');
        expect(result).toEqual(['a']);
    });

    it("input 'ab' should return ['ab', 'ba']", () => {
        const result = permutation('ab');
        expect(result).toEqual(['ab', 'ba']);
    });

    it("input 'abc' should return ['abc','acb','bac','bca','cab','cba']", () => {
        const result = permutation('abc');
        expect(result).toEqual(['abc','acb','bac','bca','cab','cba']);
    });

    it("input 'aabb' should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']", () => {
        const result = permutation('aabb');
        expect(result).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
    });
});

describe("combination function", () => {
    it("input [3, 2, 5, 8] should return ['325' '328', '358', '258']", () => {
        const result = combination([3, 2, 5, 8]);
        expect(result).toEqual(['325', '328', '358', '258']);
    });
});

