const correctPin = "712148"; // Tera set kiya hua PIN
let balance = 1025; // Initial balance

document.getElementById("checkBalance").addEventListener("click", function () {
    let enteredPin = document.getElementById("pin").value;
    if (enteredPin === correctPin) {
        document.getElementById("balance").textContent = `₹${balance}`;
    } else {
        alert("Incorrect PIN!");
    }
});

document.getElementById("updateBalance").addEventListener("click", function () {
    let enteredPin = document.getElementById("pin").value;
    if (enteredPin === correctPin) {
        let
