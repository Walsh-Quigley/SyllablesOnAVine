// scripts.js

function processTextToSymbols(text) {
    const output = document.getElementById("output-symbols");
    output.innerHTML = ""; // Clear previous output

    const punctuationMap = {
        '.': 'Period',
        '!': 'Exclamation',
        '?': 'Question',
        ',': 'Comma',
        '\'': 'Apostrophe',
        ';': 'Semicolon',
    };

    for (let char of text) {
        if (char === ' ') continue;

        let imgSrc = '';
        if (/[a-zA-Z]/.test(char)) {
        const upperChar = char.toUpperCase();
        imgSrc = `Assets/Letters/${upperChar}.png`;
        } else if (punctuationMap[char]) {
        imgSrc = `Assets/Punctuation/${punctuationMap[char]}.png`;
        } else {
        continue; // unsupported character
        }

        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = char;
        output.appendChild(img);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("process-btn").addEventListener("click", () => {
        const input = document.getElementById("user-input").value;
        processTextToSymbols(input);
    });
});  