let count = 0;
let maxLimit = null;
let audio;
const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = count;
}

function reset() {
    count = 0;
    updateDisplay();
}

function setLimit() {
    const limit = prompt('Enter maximum count value:');
    if (limit !== null && !isNaN(limit)) {
        maxLimit = parseInt(limit);
        count = 0;
        updateDisplay();
    }
}


document.body.addEventListener('click', function(event) {
    if (!['reset', 'setLimit'].includes(event.target.id)) {
        if (maxLimit === null) {
            alert('Please set a limit first!');
            return;
        }

        if (count < maxLimit) {
            count++;
            updateDisplay();
        } else {
            if (count === maxLimit) {
                // Optional: play a separate sound on reaching the limit
                // new Audio('sounds/alert.wav').play();
            }
            count = 0;
            updateDisplay();
        }
    }
});

function playSound() {
    if (!audio) {
        audio = new Audio('sounds/music.mp3');
        audio.loop = true;
    }
    audio.play().catch(() => {
        console.log('Autoplay was blocked. User interaction required.');
    });
}

// Use user interaction to trigger sound once
document.addEventListener('click', function startAudioOnce() {
    playSound();
    document.removeEventListener('click', startAudioOnce);
});


updateDisplay();
