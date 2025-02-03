

// //Custom function
// function calculateTip() {
//     //store data of input
//     var billAmount = document.getElementById("billAmount").value;
//     var serviceQuality = document.getElementById("serviceQuality").value;
//     var numPeople = document.getElementById("totalPeople").value;

//     //quick validation i.e. when people add 0 or nothing and clik calculate we 
//     //need to not perform action and tell to add no.
//     if (billAmount === "" || serviceQuality == 0) {
//         window.alert("Please enter some values !")
//         return; //this will prevent the function from continuing
//     }

//     // Check to see if this input is empty or less than or equal to 1
//     if (numPeople === "" || numPeople <= 1) {
//         numPeople = 1;

//         document.getElementById("each").style.display = "none";
//     } else {
//         document.getElementById("each").style.display = "block";
//     }

//     //Do some math
//     var total = (billAmount * serviceQuality) / numPeople;
//     window.alert(total);

// }

// //first task is to hide the tip amount on load
// document.getElementById("totalTip").style.display="none";
// //hide each i.e hide bottom part of tip
// document.getElementById("each").style.display="none";


// //Clicking the button calls our custom function
// document.getElementById("calculate").oneclick = function() { calculateTip(); };

// script.js

// Custom function
function calculateTip() {
    
    // Store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    // Quick validation
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter some values to get this baby up and running!");
        return; // this will prevent the function from continuing
    }
    
    // Check to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
        
    } else {
        
        document.getElementById("each").style.display = "block";
        
    }
    
    // Do some math!
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    
    // Display the tip!
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };


