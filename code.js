// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//sayHello function

function sayHello(input){
    if (input === ""){
        return "Hello, World!";
    } else if (parseInt(input) === Number(input)) {
        return "Hello, World!";
    } else if (typeof input === "string"){
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
}

//isFive function, exercise #10
function isFive(input){
    return input == 5;
}

//isEven function, exercise #11
function isEven(input){
    return input % 2 === 0;
}

//isVowel, exercise #12
function isVowel(input){
    return input === "a" || input === "e" || input === "i" || input === "o" || input === "u" || input === "A" || input === "E" || input === "I" || input === "O" || input === "U";
}



