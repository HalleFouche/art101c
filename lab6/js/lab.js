// Transportation list
let myTransport = ["Toyota GT86", "Walking", "Bus", "Rides from friends"];

// Main ride object
let myMainRide = {
    make: "Toyota",
    model: "GT86",
    color: "Pearl",
    year: 2022,
    age: function () {
        return 2025 - this.year;
    }
};

// Write to #output div
function outputToPage() {
    const outputEl = document.getElementById("output");

    outputEl.innerHTML += "Kinds of transportation I use: " + myTransport.join(", ") + "<br><br>";
    outputEl.innerHTML += "My Main Ride: <pre>" + JSON.stringify(myMainRide, null, 2) + "</pre>";
    outputEl.innerHTML += "Age of my car in 2025: " + myMainRide.age() + " years old.<br>";
}

// Call function when page loads
window.onload = outputToPage;
