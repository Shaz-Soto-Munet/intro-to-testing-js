// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('input null should return "Hello, World!', function () {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it('empty string input should return "Hello, World!', function () {
        expect(sayHello("")).toBe("Hello, World!")
    });
    it('number string input should return "Hello, World!', function () {
        expect(sayHello("2")).toBe("Hello, World!")
    });
    it('number input should return "Hello, World!', function () {
        expect(sayHello(2.5)).toBe("Hello, World!")
    });
    it('boolean input true should return "Hello, World!', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('boolean input false should return "Hello, World!', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

describe("isFive", function(){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when given the number 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when given "5"', function () {
        expect(isFive("5")).toBe(true);
    });
})

describe("isEven", function(){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true with a positive even number', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true with a negative even number', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false with a positive even number', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with a string', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when called with Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
})

describe("isVowel", function(){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return boolean value', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true if input is "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if input is "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false if input is "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false if input is 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false if input is false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if input is "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if no argument is passed', function () {
        expect(isVowel()).toBe(false);
    });
})

describe("add", function (){
    it('should be a defined function', function () {
        expect(typeof add).toBe("function");
    });
    it('should return 5 when given the arguments 2, 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when given the arguments -3, -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when given the arguments "5", 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return NaN when given strings as arguments', function () {
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN when given a string and a number', function () {
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN when passing no argument', function () {
        expect(add()).toBeNaN();
    });
})