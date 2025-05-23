// Array of names
const names = ["Aston", "Alea", "Alva", "Pappa", "Mamma"];

// Get the current date
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Get the name of the day and capitalize the first letter
const dayOptions = { weekday: 'long' };
const dayName = currentDate.toLocaleDateString('sv-SE', dayOptions);
const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
document.getElementById('dayName').innerText = capitalizedDayName;

// Display the current date
document.getElementById('currentDate').innerText = currentDate.toLocaleDateString('sv-SE', options);

// Calculate the index for the name based on the day of the year
const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
const diff = currentDate - startOfYear;
const oneDay = 1000 * 60 * 60 * 24;
const dayOfYear = Math.floor(diff / oneDay);

// Calculate the index for the name
const nameIndex = dayOfYear % names.length;

// Display the name with an exclamation mark
document.getElementById('nameDisplay').innerText = names[nameIndex] + "!";


/* old script that does not consider repeating name for new month could show same name again two times after another
// Array of names
const names = ["Aston", "Alea", "Alva", "Pappa", "Mamma"];

// Get the current date
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Get the name of the day and capitalize the first letter
const dayOptions = { weekday: 'long' };
const dayName = currentDate.toLocaleDateString('sv-SE', dayOptions);
const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
document.getElementById('dayName').innerText = capitalizedDayName;

// Display the current date
document.getElementById('currentDate').innerText = currentDate.toLocaleDateString('sv-SE', options);

// Calculate the index for the name based on the current day
const dayOfMonth = currentDate.getDate();
const nameIndex = (dayOfMonth - 1) % names.length; // -1 to make it zero-based index

// Display the name with an exclamation mark
document.getElementById('nameDisplay').innerText = names[nameIndex] + "!";
*/