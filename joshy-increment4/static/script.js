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
    var welcome = "and welcome to MonoMuse."
    if (hour < 5 | hour >= 20) {
        document.getElementById("greeting").innerHTML = "Good night, " + welcome;
    } else if (hour < 12) {
        document.getElementById("greeting").innerHTML = "Good morning, " + welcome;
    } else if (hour < 18) {
        document.getElementById("greeting").innerHTML = "Good afternoon, " + welcome;
    } else {
        document.getElementById("greeting").innerHTML = "Good evening, " + welcome;
    }
}

greeting(hour);

// active nav bar (new implementation)
function ActiveNav() {
    const navLinks = document.querySelectorAll('.nav_bar a');
    const currentURL = window.location.href;

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.href === currentURL) {
            link.classList.add("active");
        }
    });
}
ActiveNav();

 $("#readLess").click(function(){ 
    $("#longerPar").toggle(); 
    $("#readLess").toggle();  
    $("#readMore").toggle();    

  });
  
  $("#readMore").click(function(){
    $("#longerPar").toggle();  
    $("#readLess").toggle();  
    $("#readMore").toggle();    
  });

  $("#continue").click(function() {
    $("#checkout-form").toggle();
    $(this).prop('disabled', true);
  });

// this is all to create the calendar on the checkout page
// https://www.geeksforgeeks.org/javascript/how-to-design-a-simple-calendar-using-javascript/

// current month and year
let currentMonth = new Date().getMonth(); 
let currentYear = new Date().getFullYear();

// used to mark past dates
const realToday = new Date();
const realMonth = realToday.getMonth();
const realYear = realToday.getFullYear();
const realDay = realToday.getDate();

function updateCalendar() {
    const calendarGrid = document.getElementById("calendar-grid");
    const dateDisplay = document.getElementById("date");

    if (!calendarGrid || !dateDisplay) return;

    const tempDate = new Date(currentYear, currentMonth);
    const monthName = tempDate.toLocaleString('en-US', { month: 'long' });
    dateDisplay.innerHTML = `${monthName} ${currentYear}`;

    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay(); 
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    calendarGrid.innerHTML = "";

    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDiv = document.createElement("div");
        calendarGrid.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.innerText = day;
        dayDiv.classList.add("calendar-day");

        const isPastMonth = (currentYear < realYear) || (currentYear === realYear && currentMonth < realMonth);
        const isCurrentMonthPastDay = (currentYear === realYear && currentMonth === realMonth && day < realDay);

        if (isPastMonth || isCurrentMonthPastDay) {
            dayDiv.classList.add("past-day");
        } else {
            dayDiv.addEventListener("click", function() {
                document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
                this.classList.add('selected');
                console.log(`Selected: ${monthName} ${day}, ${currentYear}`);
            });
        }

        if (currentYear === realYear && currentMonth === realMonth && day === realDay) {
            dayDiv.classList.add("today");
        }

        calendarGrid.appendChild(dayDiv);
    }
}

document.getElementById("next")?.addEventListener("click", function() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
});

document.getElementById("prev")?.addEventListener("click", function() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
});
updateCalendar();