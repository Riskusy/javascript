function updateLight(current) {

    //your code here!
    var colors = ["green","yellow","red"];
    if( colors.indexOf(current) == 2){
        return colors[0];
    } else {
        return colors[colors.indexOf(current)+1];
    }
}