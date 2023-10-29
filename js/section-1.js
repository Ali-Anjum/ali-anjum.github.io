var x = document.getElementById('change-section-1');
var i = 1;
var timeoutId;

function section_1() {
    fetch('../data/text.json')
        .then(response => response.json())
        .then(data => {
            animateOpacity(0);
            x.innerHTML = data[i].text;
            i++;
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function animateOpacity(opacity) {
    x.style.opacity = opacity;

    if (opacity < 1) {
        requestAnimationFrame(() => animateOpacity(opacity + 0.01));
    } else {
        setTimeout(() => {
            
            section_1();
        }, 3000); // Wait for 3 seconds before changing data
    }
}

// Call section_1 to start the slideshow
section_1();
