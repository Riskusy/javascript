// Declare the myGlobal variable below this line
const myGlobal = 10;
const oopsGlobal = 5;
function fun1() {
    // Assign 5 to oopsGlobal Here
    return oopsGlobal / 2;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}