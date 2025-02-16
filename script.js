const correctUsername = "simon-ghosh-07";
const correctPassword = "simon@0211";
const correctPin = "712148";

document.getElementById("loginBtn").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("balancePage").style.display = "block";
    } else {
        alert("Incorrect Username or Password!");
    }
});

// Load balances from local storage
let gullakBalance = localStorage.getItem("gullakBalance") || 0;
let chilladBalance = localStorage.getItem("chilladBalance") || 0;

document.getElementById("checkGullakBalance").addEventListener("click", function () {
    let enteredPin = document.getElementById("pinGullak").value;
    if (enteredPin === correctPin) {
        document.getElementById("gullakBalance").textContent = gullakBalance;
    } else {
        alert("Incorrect PIN!");
    }
});

document.getElementById("updateGullakBalance").addEventListener("click", function () {
    let enteredPin = document.getElementById("pinGullak").value;
    if (enteredPin === correctPin) {
        let amount = prompt("Enter new Gullak balance:");
        if (!isNaN(amount) && amount !== null) {
            gullakBalance = amount;
            localStorage.setItem("gullakBalance", gullakBalance);
            document.getElementById("gullakBalance").textContent = gullakBalance;
        }
    } else {
        alert("Incorrect PIN!");
    }
});

document.getElementById("checkChilladBalance").addEventListener("click", function () {
    let enteredPin = document.getElementById("pinChillad").value;
    if (enteredPin === correctPin) {
        document.getElementById("chilladBalance").textContent = chilladBalance;
    } else {
        alert("Incorrect PIN!");
    }
});

document.getElementById("updateChilladBalance").addEventListener("click", function () {
    let enteredPin = document.getElementById("pinChillad").value;
    if (enteredPin === correctPin) {
        let amount = prompt("Enter new Chillad balance:");
        if (!isNaN(amount) && amount !== null) {
            chilladBalance = amount;
            localStorage.setItem("chilladBalance", chilladBalance);
            document.getElementById("chilladBalance").textContent = chilladBalance;
        }
    } else {
        alert("Incorrect PIN!");
    }
});

document.getElementById("checkTotalBalance").addEventListener("click", function () {
    let enteredPin = document.getElementById("pinTotal").value;
    if (enteredPin === correctPin) {
        let totalBalance = parseInt(gullakBalance) + parseInt(chilladBalance);
        document.getElementById("totalBalance").textContent = totalBalance;
    } else {
        alert("Incorrect PIN!");
    }
});
