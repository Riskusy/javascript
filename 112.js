function doubleChar(str) {
    // Your code here
    var newString = "";
    for( i = 0; i < str.length; i++) {
        newString += str[i] + str[i];
    }
    return newString;
}
