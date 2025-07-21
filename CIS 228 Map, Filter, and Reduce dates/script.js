function toDateObject(str) {
    const mm = str.substring(0, 2);
    const dd = str.substring(2, 4);
    const yyyy = str.substring(4, 8);
    return new Date(`${yyyy}-${mm}-${dd}`);
}

function isInYear(year) {
    return function(date) {
        return date.getFullYear().toString() === year;
    };
}

function earliestDate(a, b) {
    return a < b ? a : b;
}

// This function is used to convert a date object to a string in the format YYYY-MM-DD
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submitBtn").addEventListener('click', async () => {
        const year = document.getElementById('yearInput').value.trim();
        const result = document.getElementById('result');
        if (!/^\d{4}$/.test(year)) {
            result.textContent = 'Please enter a valid year (e.g., 2025).';
            return;
        }
        const earliestDate = await findEarliestDate(year);
        if (!earliestDate || isNaN(earliestDate)) {
            result.textContent = `No dates found for the specified ${year}.`;
        }  else {
            result.textContent = `The earliest date in ${year} is: ${earliestDate.toISOString().split('T')[0]}`;
        }
    });
});
// This function fetches the dates from a JSON file, filters them by the specified year,

async function findEarliestDate(year) {
    try {
        const response = await fetch('dates.json');
        const dateStrings = await response.json();

        const earliest = dateStrings
            .map(toDateObject)
            .filter(isInYear(year))
            .reduce(earliestDate);

        return earliest;
    } catch (error) {
        console.error('Error fetching or processing dates:', error);
        return null;
    }
}