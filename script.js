// **Login System**
const correctUsername = "simon-ghosh-07";
const correctPassword = "simon@0211";
const correctPin = "712148";

// Default balances
let gullakBalance = parseFloat(localStorage.getItem("gullakBalance")) || 1025;
let chilladBalance = parseFloat(localStorage.getItem("chilladBalance")) || 50;
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

document.getElementById("loginBtn").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("appSection").style.display = "block";
        updateExpenseList();
    } else {
        alert("Incorrect Username or Password!");
    }
});

// **Balance Check Functions**
document.getElementById("checkGullak").addEventListener("click", function () {
    let enteredPin = document.getElementById("pin").value;
    if (enteredPin === correctPin) {
        document.getElementById("gullakBalance").textContent = gullakBalance;
    } else {
        alert("Incorrect PIN!");
    }
});

document.getElementById("checkChillad").addEventListener("click", function () {
    let enteredPin = document.getElementById("pin").value;
    if (enteredPin === correctPin) {
        document.getElementById("chilladBalance").textContent = chilladBalance;
    } else {
        alert("Incorrect PIN!");
    }
});

document.getElementById("checkTotal").addEventListener("click", function () {
    let enteredPin = document.getElementById("pin").value;
    if (enteredPin === correctPin) {
        document.getElementById("totalBalance").textContent = gullakBalance + chilladBalance;
    } else {
        alert("Incorrect PIN!");
    }
});

// **Update Balance**
document.getElementById("updateGullak").addEventListener("click", function () {
    let enteredPin = document.getElementById("pin").value;
    if (enteredPin === correctPin) {
        let amount = parseFloat(document.getElementById("newGullak").value);
        if (amount > 0) {
            gullakBalance += amount;
            localStorage.setItem("gullakBalance", gullakBalance);
            document.getElementById("gullakBalance").textContent = gullakBalance;
        }
    } else {
        alert("Incorrect PIN!");
    }
});

document.getElementById("updateChillad").addEventListener("click", function () {
    let enteredPin = document.getElementById("pin").value;
    if (enteredPin === correctPin) {
        let amount = parseFloat(document.getElementById("newChillad").value);
        if (amount > 0) {
            chilladBalance += amount;
            localStorage.setItem("chilladBalance", chilladBalance);
            document.getElementById("chilladBalance").textContent = chilladBalance;
        }
    } else {
        alert("Incorrect PIN!");
    }
});

// **Daily Expense Tracker**
function getCurrentDate() {
    let today = new Date();
    let day = today.getDate().toString().padStart(2, '0');
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let year = today.getFullYear();
    return `${day}/${month}/${year}`;
}

document.getElementById("currentDate").textContent = getCurrentDate();

document.getElementById("addExpense").addEventListener("click", function () {
    let amount = parseFloat(document.getElementById("expenseAmount").value);
    if (amount > 0) {
        let newExpense = { date: getCurrentDate(), amount: amount };
        expenses.push(newExpense);
        localStorage.setItem("expenses", JSON.stringify(expenses));
        updateExpenseList();
    }
});

function updateExpenseList() {
    let expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";
    expenses.forEach(exp => {
        let li = document.createElement("li");
        li.textContent = `Date: ${exp.date} - ₹${exp.amount}`;
        expenseList.appendChild(li);
    });
}
