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
    } else if (typeof input === "string" && parseInt(input) !==  NaN){
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
}

