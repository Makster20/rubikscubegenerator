

if (document.getElementById('download-btn')){
    // Function to download the SVG as an image
document.getElementById('download-btn').addEventListener('click', function () {
    const svgElement = document.getElementById('cube');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const img = new Image();

    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);

        const imgURI = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream');

        const a = document.createElement('a');
        a.setAttribute('download', 'rubik-cube.png');
        a.setAttribute('href', imgURI);
        a.click();
    };

    img.src = url;
});
}



let selectedColor = 'white';

let lastCheckedDiv = null;

function setColor(color, div) {
    selectedColor = color;

    // Remove checkmark from previously selected div
    if (lastCheckedDiv) {
        lastCheckedDiv.querySelector('.checkmark').classList.add('opacity-0');
        lastCheckedDiv.querySelector('.checkmark').classList.remove('opacity-100');
    }

    // Add checkmark to the clicked div
    div.querySelector('svg').classList.remove('opacity-0');
    div.querySelector('svg').classList.add('opacity-100');

    // Store the current div as the last checked one
    lastCheckedDiv = div;
}

const customColorDiv = document.getElementById('customColorDiv');
const customColorPicker = document.getElementById('customColorPicker');

if (document.getElementById('customColorPicker')){
    // When the div is clicked, open the hidden color input
customColorDiv.addEventListener('click', function() {
    customColorPicker.click(); // Simulates a click on the hidden input

    // Remove checkmark from previously selected div
if (lastCheckedDiv) {
    lastCheckedDiv.querySelector('.checkmark').classList.add('opacity-0');
    lastCheckedDiv.querySelector('.checkmark').classList.remove('opacity-100');
}

// Add checkmark to the clicked div
customColorDiv.querySelector('svg').classList.remove('opacity-0');
customColorDiv.querySelector('svg').classList.add('opacity-100');

// Store the current div as the last checked one
lastCheckedDiv = customColorDiv;
});
}



    
if (document.getElementById('customColorPicker')){
    document.getElementById('customColorPicker').addEventListener('input', function() {
            selectedColor = this.value
        });
}


const stickers = document.querySelectorAll('.sticker');
stickers.forEach(sticker => {
    sticker.addEventListener('click', function() {
        sticker.setAttribute('fill', selectedColor);
    });
});

const darkToggle = document.querySelector('#darkToggle');
const darkButton = document.querySelector('#darkButton')
const parentDiv = document.querySelector('#parentDiv')

darkToggle.addEventListener('click', function(){
    if (parentDiv.classList.contains('dark')){
        parentDiv.classList.remove('dark')
        darkToggle.setAttribute('fill', '#172554')
    }
    else{
        parentDiv.classList.add('dark')
        darkToggle.setAttribute('fill', '#DBEAFE')
    }
})

darkButton.addEventListener('click', function(){
    if (parentDiv.classList.contains('dark')){
        parentDiv.classList.remove('dark')
        darkButton.setAttribute('fill', '#DBEAFE')
    }
    else{
        parentDiv.classList.add('dark')
        
        darkButton.setAttribute('fill', '#172554')
    }
})