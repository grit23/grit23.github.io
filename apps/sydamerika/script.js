const originalCountries = [
    { land: "Argentina", huvudstad: "Buenos Aires" },
    { land: "Bolivia", huvudstad: "Sucre*" },
    { land: "Brasilien", huvudstad: "Brasília" },
    { land: "Chile", huvudstad: "Santiago" },
    { land: "Colombia", huvudstad: "Bogotá" },
    { land: "Ecuador", huvudstad: "Quito" },
    { land: "Guyana", huvudstad: "Georgetown" },
    { land: "Paraguay", huvudstad: "Asunción" },
    { land: "Peru", huvudstad: "Lima" },
    { land: "Surinam", huvudstad: "Paramaribo" },
    { land: "Uruguay", huvudstad: "Montevideo" },
    { land: "Venezuela", huvudstad: "Caracas" }
];

let countries = [...originalCountries];
const container = document.getElementById('flashcardsContainer');
const toggleBtn = document.getElementById('toggleBtn');
const scoreDisplay = document.getElementById('scoreDisplay');
let lastFlipped = null;
let reversed = false; // false: land först, true: huvudstad först
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
    // Blanda korten
    countries = [...originalCountries];
    shuffleArray(countries);
    // Nollställ poäng
    score = 0;
    updateScoreDisplay();
    // Ändra färger
    document.body.classList.toggle('alt-bg', reversed);
    toggleBtn.classList.toggle('alt-btn', reversed);
    renderCards();
});

// Initial rendering
renderCards();
updateScoreDisplay();