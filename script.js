function checkBalance() {
    const correctPin = "712148";  // Yaha tera PIN hai
    let enteredPin = document.getElementById("pin").value;
    
    if (enteredPin === correctPin) {
        document.getElementById("balance").style.display = "block";
        document.getElementById("amount").innerText = "1025";  // Yaha manually balance update kar
    } else {
        alert("Wrong PIN!");
    }
}
