var x = 5;
var y = 7;
var z = x + y;
// console.log(z);

var a = "Hello";
var b = " World!";
var c = a + b;
// console.log(c);

function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}

// sumnPrint(x, y);
// sumnPrint(a, b);
// console.log(c.length);


var date = new Date();
var year = date.getFullYear();
document.getElementById("copyright").innerHTML = "&copy " + year + " Monomuse Inc. All rights reserved.";


// function addYear() {
//     var date = new Date();
//     var year = date.getFullYear();
//     document.getElementById("copyYear").innerHTML = year;
// }


if (c.length > z) {
    console.log(c);
} else if (c.length < z) {
        console.log(z);
    } else {
    console.log("good job!");
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

// version 1
function findTheBanana(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "Banana") {
            alert("Found Banana!");
        }
    }
}

// findTheBanana(L1);
// findTheBanana(L2);


// version 2
function findTheBanana2(array) {
    array.forEach((item) => {
        if (item === "Banana") {
            alert("Found it");
        }
    });
}



// findTheBanana2(L1);
// findTheBanana2(L2);

// date/time based greeting
var now = new Date();
var hour = now.getHours();

function greeting(hour) {
    if (document.getElementById("greeting") === null) {
        return;
    }  
    
    // console.log(hour);
 
    if (hour < 5 | hour >= 20) {
        document.getElementById("greeting").innerHTML = "Good night";
    } else if (hour < 12) {
        document.getElementById("greeting").innerHTML = "Good morning";
    } else if (hour < 18) {
        document.getElementById("greeting").innerHTML = "Good afternoon";
    } else {
        document.getElementById("greeting").innerHTML = "Good evening";
    }
}

greeting(hour);