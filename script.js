let count = 0;
const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = count;
}

function reset() {
    count = 0;
    updateDisplay();
}

document.body.addEventListener('click', function(event) {
    if (event.target.id !== 'reset') {
        count++;
        updateDisplay();
    }
});

// Initialize display
updateDisplay();