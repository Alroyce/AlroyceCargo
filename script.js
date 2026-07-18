// Page Navigation

function showPage(page){

    const pages = [
        "homePage",
        "topayPage",
        "paidPage",
        "tripPage",
        "bookingsPage",
        "aboutPage"
    ];


    pages.forEach(id=>{
        let section=document.getElementById(id);

        if(section){
            section.style.display="none";
        }
    });


    let selected=document.getElementById(page);

    if(selected){
        selected.style.display="block";
    }

}



// On Load

window.addEventListener("DOMContentLoaded", () => {

    generateLRNumber();
    generateDate();

    document
        .getElementById("addGoods")
        .addEventListener("click", addRow);

});


// Generate LR Number

function generateLRNumber() {

    let count = localStorage.getItem("lrCount");

    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }

    localStorage.setItem("lrCount", count);

    let lr = "LR-" + String(count).padStart(5, "0");

    document.getElementById("lrNumber").textContent = lrNo;
    document.getElementById("lr_number").value = lrNo;
}


// Generate Date

function generateDate() {

    let today = new Date();

    let date =
        String(today.getDate()).padStart(2, "0") + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        today.getFullYear();

    document.getElementById("lrdate").textContent = today;
    document.getElementById("booking_date").value = today;
}

// Add Goods Row

function addRow() {

    let tbody = document.querySelector("#parcelTable tbody");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td><input type="number" placeholder="Qty"></td>
        <td><input type="text" placeholder="Goods"></td>
        <td><input type="number" placeholder="Weight"></td>
        <td>
            <button type="button" onclick="removeRow(this)">
                Remove
            </button>
        </td>
    `;

    tbody.appendChild(row);
}




// Remove Row

function removeRow(btn) {

    let tbody = document.querySelector("#parcelTable tbody");

    if (tbody.rows.length > 1) {
        btn.closest("tr").remove();
    } else {
        alert("At least one row is required.");
    }
}



// Clear Form
function clearsection() {

    // Clear all input fields
    document.querySelectorAll("input").forEach(input => {

        if (input.type === "checkbox" || input.type === "radio") {
            input.checked = false;
        } else {
            input.value = "";
        }

    });

    // Clear textareas
    document.querySelectorAll("textarea").forEach(textarea => {
        textarea.value = "";
    });

    // Reset all dropdowns
    document.querySelectorAll("select").forEach(select => {
        select.selectedIndex = 0;
    });

    // Keep only the first goods row
    let tbody = document.querySelector("#parcelTable tbody");

    while (tbody.rows.length > 1) {
        tbody.deleteRow(1);
    }

    // Clear the first goods row
    tbody.rows[0].querySelectorAll("input").forEach(input => {
        input.value = "";
    });

    // Generate new LR Number and Date
    generateLRNumber();
    generateDate();
}
const data = {
    payment_type: "TO-PAY",
    sender_name: "Ramesh",
    receiver_name: "Suresh",
    charges: 250
};

fetch("http://localhost:3000/book", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(response => response.text())
.then(result => alert(result))
.catch(error => console.error(error));