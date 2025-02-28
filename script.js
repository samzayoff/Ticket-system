alert("Welcome to Ticket system For PAK VS IND match");
let permission = prompt("We are only left with tickets of 10,000. would you like to continue it? yes/no . Ensure you enter all small characters");
let age = parseFloat(prompt("Enter your age: "));
if (age >= 18) {
    if (permission === "yes") {
        let gender = prompt("Select your Gender: \nEnter M for male \nF for Female. \no for others.");
        if (gender === "M" || gender === "m") {
            alert("We Welome you in Male VIP enclousure");
        }
        else if (gender === "F" || gender === "f") {
            alert("We welcome you in female VIP enclousure");
        }
        else {
            alert("Sorry! we have no space Left");
        }
    } else {
        alert("THANKS !")
    }
}
else {
    alert("You are under age.");
    alert("Thanks!");
}
