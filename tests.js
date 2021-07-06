describe('sayHello', function() {
    it('should be a function', function() {
        expect(typeof sayHello).toBe('function');
    })
    it('should return a string', function() {
        expect(typeof sayHello()).toBe('string');
    })
    it('should return "hello"', function() {
        expect(sayHello()).toBe('hello');
    })
});
describe('returnSecondToLastChar', function() {
    describe('basic', function() {
        it('should be a function', function() {
            expect(typeof returnSecondToLastChar).toBe('function');
        })
        it('should return "a" given "cat"', function() {
            expect(returnSecondToLastChar('cat')).toBe('a');
        })
        it('should return "i" given "it"', function() {
            expect(returnSecondToLastChar('it')).toBe('i');
        })
        it('should return "u" given "codeup"', function() {
            expect(returnSecondToLastChar('codeup')).toBe('u');
        })
    })
    describe('edge cases', function() {
        it('should return the string "improper input" when passed an input that is not a string data type', function() {
            expect(returnSecondToLastChar(null)).toBe('improper input');
            expect(returnSecondToLastChar([])).toBe('improper input');
            expect(returnSecondToLastChar()).toBe('improper input');
            expect(returnSecondToLastChar(0)).toBe('improper input');
            expect(returnSecondToLastChar(true)).toBe('improper input');
            expect(returnSecondToLastChar({})).toBe('improper input');
        })
        it('should return an empty string when passed an empty string', function() {
            expect(returnSecondToLastChar('')).toBe('');
        })
        it('should return an empty string when passed a one character long string', function() {
            expect(returnSecondToLastChar('a')).toBe('');
            expect(returnSecondToLastChar(' ')).toBe('');
            expect(returnSecondToLastChar('0')).toBe('');
        })
        it('should return an empty space if the second to last character is an empty space', function() {
            expect(returnSecondToLastChar('b b')).toBe(' ');
        })
    })
})