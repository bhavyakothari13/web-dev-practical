// Array to store all expenses
let expenses = [];


// Function to add an expense
function addExpense() {

    // Get values from input fields
    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;
    let category = document.getElementById("expenseCategory").value;

    // Remove extra spaces from name
    name = name.trim();

    // Check if name is empty
    if (name == "") {
        alert("Please enter expense name.");
        return;
    }

    // Check if amount is empty or invalid
    if (amount == "" || Number(amount) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Create an expense object
    let expense = {
        name: name,
        amount: Number(amount),
        category: category
    };

    // Add expense to array
    expenses.push(expense);

    // Display expenses
    displayExpenses();

    // Clear input fields
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}


// Function to display expenses
function displayExpenses() {

    let expenseList = document.getElementById("expenseList");

    // Clear previous list
    expenseList.innerHTML = "";

    // Get selected category
    let selectedCategory = document.getElementById("categoryFilter").value;

    let total = 0;
    let foundExpense = false;

    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {

        // Check category filter
        if (
            selectedCategory == "All" ||
            expenses[i].category == selectedCategory
        ) {

            foundExpense = true;

            // Add amount to total
            total = total + expenses[i].amount;

            // Create expense div
            let expenseDiv = document.createElement("div");

            expenseDiv.className = "expense";

            expenseDiv.innerHTML = `
                <h3>${expenses[i].name}</h3>
                <p><b>Amount:</b> ₹${expenses[i].amount}</p>
                <p><b>Category:</b> ${expenses[i].category}</p>
                <button class="delete-btn" onclick="deleteExpense(${i})">
                    Delete
                </button>
            `;

            // Add expense to page
            expenseList.appendChild(expenseDiv);
        }
    }

    // Show message if no expense exists
    if (foundExpense == false) {

        expenseList.innerHTML = `
            <p class="no-expense">No expenses found.</p>
        `;
    }

    // Display total
    document.getElementById("totalExpense").innerText = total;
}


// Function to delete an expense
function deleteExpense(index) {

    // Remove expense from array
    expenses.splice(index, 1);

    // Display updated expenses
    displayExpenses();
}
