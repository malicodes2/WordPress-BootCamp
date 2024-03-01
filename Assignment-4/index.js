function generateTable() {
    const number = parseInt(document.getElementById("numberInput").value);
    const limit = parseInt(document.getElementById("limitInput").value);
    const tableContainer = document.getElementById("tableContainer");

    let tableHTML = "<table border='1'>";
    if (number < 20) {
        for (let i = number; i >= 1; i--) {
            tableHTML += `<tr><td>${i}</td></tr>`;
        }
    } else {
        for (let i = 1; i <= limit; i++) {
            tableHTML += `<tr><td>${i}</td></tr>`;
        }
    }
    tableHTML += "</table>";

    tableContainer.innerHTML = tableHTML;
}