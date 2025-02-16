const correctPin = "712148"; // Tera set kiya hua PIN
let balance = 1025; // Initial balance

// Check Balance Button
document.getElementById("checkBalance").addEventListener("click", function () {
    let enteredPin = document.getElementById("pin").value;
    if (enteredPin === correctPin) {
        document.getElementById("balance").textContent = `₹${balance}`;
    } else {
        alert("Incorrect PIN!");
    }
});

// Update Balance Button
document.getElementById("updateBalance").addEventListener("click", function () {
    let enteredPin = document.getElementById("pin").value;
    if (enteredPin === correctPin) {
        let newBalance = prompt("Enter new balance:");
        if (!isNaN(newBalance) && newBalance !== null && newBalance !== "") {
            balance = parseFloat(newBalance);
            document.getElementById("balance").textContent = `₹${balance}`;
            alert("Balance updated successfully!");
        } else {
            alert("Invalid amount entered!");
        }
    } else {
        alert("Incorrect PIN!");
    }
});
