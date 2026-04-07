var date = new Date();
var year = date.getFullYear();
document.getElementById("copyright").innerHTML = "&copy " + year + " Monomuse Inc. All rights reserved.";

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

// calendar logic for checkout page
// inspiration & source: https://webdesign.tutsplus.com/learn-how-to-code-a-simple-javascript-calendar-and-datepicker--cms-108322t

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

// menu reveal
$("#hamburger").click(function(){ 
    $('#nav-links-container').toggleClass('active');
});

if (typeof L !== 'undefined' && document.getElementById('map')) {
    var map = L.map('map').setView([21.3245, -157.9251], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([21.3245, -157.9251]).addTo(map);

    marker.bindPopup("MonoMuse!").openPopup();
}

// total price calculation
const ticketPrices = {
    general: 25.00,
    student: 15.00,
    member: 10.00
};

function updateTotal() {
    const ticketType = document.getElementById('ticketType').value;
    const quantity = parseInt(document.getElementById('ticketQuantity').value) || 0;
    const total = ticketPrices[ticketType] * quantity;
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

document.getElementById('ticketType')?.addEventListener('change', updateTotal);
document.getElementById('ticketQuantity')?.addEventListener('input', updateTotal);


// confirmation page 
const checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {
    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const name = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const total = document.getElementById('totalPrice').textContent;
        const date = document.getElementById('date').textContent; 

        localStorage.setItem('receiptName', name);
        localStorage.setItem('receiptEmail', email);
        localStorage.setItem('receiptTotal', total);
        localStorage.setItem('receiptDate', date);

        window.location.href = "confirmation.html";
    });
}

function displayReceipt() {
    const confNameDisplay = document.getElementById('conf-name');
    
    if (confNameDisplay) {
        document.getElementById('conf-name').textContent = localStorage.getItem('receiptName') || "Visitor";
        document.getElementById('conf-email').textContent = localStorage.getItem('receiptEmail') || "N/A";
        document.getElementById('conf-total').textContent = localStorage.getItem('receiptTotal') || "0.00";
        document.getElementById('conf-date').textContent = localStorage.getItem('receiptDate') || "Selected Date";
        
        const orderIdDisplay = document.getElementById('order-id');
        if (orderIdDisplay) {
            orderIdDisplay.textContent = Math.floor(100000 + Math.random() * 900000);
        }
    }
}

displayReceipt();