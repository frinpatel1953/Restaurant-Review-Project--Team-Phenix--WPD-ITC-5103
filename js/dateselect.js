// Function to get today's and tomorrow's dates in the required format (YYYY-MM-DD)
function getFormattedDate(offsetDays) {
    const today = new Date();
    today.setDate(today.getDate() + offsetDays);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${day}-${month}-${year}`;
}

// Get references to the dropdown element
const dateSelect = document.getElementById('dateSelect');

// Populate dropdown with today's and tomorrow's dates
dateSelect.innerHTML = `
    <option value="${getFormattedDate(0)}">${getFormattedDate(0)}</option>
    <option value="${getFormattedDate(1)}">${getFormattedDate(1)}</option>
    <option value="${getFormattedDate(2)}">${getFormattedDate(2)}</option>
    <option value="${getFormattedDate(3)}">${getFormattedDate(3)}</option>
`;
