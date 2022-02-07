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


