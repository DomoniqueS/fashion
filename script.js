var myIndex = 0;
var myIndex1 = 0;
var myIndex2 = 0;
var myIndex3 = 0;
carousel();
carousel2();
carousel3();
carousel4();
function carousel() {
    var i;
    var x = document.getElementsByClassName("myShoes");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 1 seconds
}

function carousel2() {
    var i;
    var x = document.getElementsByClassName("myFashion");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex1++;
    if (myIndex1 > x.length) {myIndex1 = 1}
    x[myIndex1-1].style.display = "block";
    setTimeout(carousel2, 2000); // Change image every 1 seconds
}

function carousel3() {
    var i;
    var x = document.getElementsByClassName("myMakeup");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}
    x[myIndex2-1].style.display = "block";
    setTimeout(carousel3, 2000); // Change image every 1 seconds
}
function carousel4() {
    var i;
    var x = document.getElementsByClassName("myHair");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex3++;
    if (myIndex3 > x.length) {myIndex3 = 1}
    x[myIndex3-1].style.display = "block";
    setTimeout(carousel4, 2000); // Change image every 1 seconds
}
