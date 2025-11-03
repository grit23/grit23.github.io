const originalCountries = [
    { land: "Kanada", huvudstad: "Ottawa" },
    { land: "USA (Förenta staterna)", huvudstad: "Washington, D.C." },
    { land: "Mexiko", huvudstad: "Mexico City" },
    { land: "Guatemala", huvudstad: "Guatemala City" },
    { land: "Belize", huvudstad: "Belmopan" },
    { land: "Honduras", huvudstad: "Tegucigalpa" },
    { land: "El Salvador", huvudstad: "San Salvador" },
    { land: "Nicaragua", huvudstad: "Managua" },
    { land: "Costa Rica", huvudstad: "San José" },
    { land: "Panama", huvudstad: "Panama City" },
    { land: "Bahamas", huvudstad: "Nassau" },
    { land: "Kuba", huvudstad: "Havanna" },
    { land: "Jamaica", huvudstad: "Kingston" },
    { land: "Haiti", huvudstad: "Port-au-Prince" },
    { land: "Dominikanska republiken", huvudstad: "Santo Domingo" },
    { land: "Saint Kitts och Nevis", huvudstad: "Basseterre" },
    { land: "Antigua och Barbuda", huvudstad: "Saint John's" },
    { land: "Dominica", huvudstad: "Roseau" },
    { land: "Saint Lucia", huvudstad: "Castries" },
    { land: "Saint Vincent och Grenadinerna", huvudstad: "Kingstown" },
    { land: "Grenada", huvudstad: "St. George's" },
    { land: "Barbados", huvudstad: "Bridgetown" },
    { land: "Trinidad och Tobago", huvudstad: "Port of Spain" }
];

let countries = [...originalCountries];
const container = document.getElementById('flashcardsContainer');
const toggleBtn = document.getElementById('toggleBtn');
const scoreDisplay = document.getElementById('scoreDisplay');
let lastFlipped = null;
let reversed = false; // false: land först, true: huvudstad först
let altColors = false;
let score = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateScoreDisplay() {
    scoreDisplay.textContent = "Antal: " + score;
}

function renderCards() {
    container.innerHTML = '';
    lastFlipped = null;
    countries.forEach((country, idx) => {
        const card = document.createElement('div');
        card.className = 'flashcard';
        card.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">${reversed ? country.huvudstad : country.land}</div>
                <div class="flashcard-back">${reversed ? country.land : country.huvudstad}</div>
            </div>
        `;
        card.addEventListener('click', function() {
            // Om kortet redan är vänt, gör inget
            if (card.classList.contains('flipped')) return;
            // Vänd tillbaka tidigare kort
            if (lastFlipped && lastFlipped !== card) {
                lastFlipped.classList.remove('flipped');
            }
            // Vänd detta kort
            card.classList.add('flipped');
            lastFlipped = card;
            // Öka poäng
            score++;
            updateScoreDisplay();
        });
        container.appendChild(card);
    });
}

toggleBtn.addEventListener('click', function() {
    reversed = !reversed;
    altColors = !altColors;
    // Blanda korten
    countries = [...originalCountries];
    shuffleArray(countries);
    // Nollställ poäng
    score = 0;
    updateScoreDisplay();
    // Ändra färger
    document.body.classList.toggle('alt-bg', altColors);
    toggleBtn.classList.toggle('alt-btn', altColors);
    renderCards();
});

// Initial rendering
renderCards();
updateScoreDisplay();