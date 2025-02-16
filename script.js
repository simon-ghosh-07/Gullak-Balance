const correctPin = "712148"; // Set PIN

// Local Storage se balance load karne ka function
function loadBalance() {
    let savedBalance = localStorage.getItem("balance");
    return savedBalance ? parseInt(savedBalance) : 1025; // Default ₹1025 agar kuch na ho
}

let balance = loadBalance(); // Balance ko load karna

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
        let newAmount = prompt("Enter new balance:");
        if (newAmount !== null && !isNaN(newAmount) && newAmount.trim() !== "") {
            balance = parseInt(newAmount); // Balance update karna
            localStorage.setItem("balance", balance); // Save to local storage
            document.getElementById("balance").textContent = `₹${balance}`;
        } else {
            alert("Invalid amount entered!");
        }
    } else {
        alert("Incorrect PIN!");
    }
});
