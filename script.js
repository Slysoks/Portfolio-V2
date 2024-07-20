function navLinkColor() {
    let li = document.querySelectorAll('.navColor');

    let colors = [
        'F8F7FF',
        '46B1C9',
        'F6AE2D',
        '84E296',
        'FF6F59'
    ];

    let links = [];

    li.forEach((element, index) => {
        if (index === window.scrollY / window.innerHeight) {
            element.style.color = `#${colors[index]}`;
        } else {
            element.style.color = 'white';
        }
    });

}

function setAge() {
    let birthDate = new Date('2009-03-15');
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('age').innerHTML = age;
}

window.addEventListener('mousemove', function (e) {
    // The goal is to navigate between the different section by clicking on the arrows

    // Register the arrows
    let arrow = document.getElementById('arrow');

    if (this.window.innerWidth - e.clientX > 85 || e.clientY < 125) {
        arrow.style.display = 'none';
    } else {
        arrow.style.display = 'flex';
    }

    // Register the current section using the scrollY value
    let currentSectionIndex = Math.round(window.scrollY / window.innerHeight);

    // Adjust the arrow position based on the cursor height
    let arrowPosition = event.clientY;
    arrow.style.top = `${arrowPosition - 25}px`;

    checkArrowRotation();

});

document.getElementById('arrow').addEventListener('click', function () {
    let arrow = document.getElementById('arrow');

    let currentSection = window.scrollY / window.innerHeight;
    let currentSectionIndex = Math.round(currentSection);

    if (arrow.style.transform === 'rotate(180deg)') {
        window.scrollTo({
            top: (currentSectionIndex + 1) * window.innerHeight - 100,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: (currentSectionIndex - 1) * window.innerHeight -100,
            behavior: 'smooth'
        });
    }

    checkArrowRotation();

});

function checkArrowRotation() {
    let arrow = document.getElementById('arrow');
    let currentSectionIndex = Math.round(window.scrollY / window.innerHeight);

    if (currentSectionIndex === 0) arrow.style.transform = 'rotate(180deg)';
    else if (event.clientY > (this.window.innerHeight + 100) / 2) arrow.style.transform = 'rotate(180deg)';
    else arrow.style.transform = 'rotate(0deg)';
    navLinkColor();
}

navLinkColor();
setAge();
