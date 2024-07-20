function navLinkColor() {
    let li = document.querySelectorAll('.navColor');

    let colors = [
        'F1FAEE',
        'A8DADC',
        '457B9D',
        '4f66a3',
        'E63946'
    ];

    li.forEach((element, index) => {
        if (index === Math.round(window.scrollY / window.innerHeight)) {


            element.style.setProperty('--pseudo-background-color', `#${colors[index]}`);
            element.classList.add('active');
        } else {
            element.style.color = 'white';
            element.style.setProperty('--pseudo-background-color', 'transparent');
            element.classList.remove('active');
        }
    });

}

function navLinkClick() {
    let li = document.querySelectorAll('.navColor');

    li.forEach((element, index) => {
        element.addEventListener('click', function () {
            window.scrollTo({
                top: index * window.innerHeight - 50,
                behavior: 'smooth'
            });
        });
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

function checkArrowRotation() {
    let arrow = document.getElementById('arrow');
    let currentSectionIndex = Math.round(window.scrollY / window.innerHeight);

    if (currentSectionIndex === 0) arrow.style.transform = 'rotate(180deg)';
    else if (currentSectionIndex === 3) arrow.style.transform = 'rotate(0deg)';
    // Check if event is defined before accessing event.clientY
    else if (event.clientY > (this.window.innerHeight + 100) / 2) arrow.style.transform = 'rotate(180deg)';
    else arrow.style.transform = 'rotate(0deg)';
}

setAge();

window.addEventListener('load', function () {
    // Delay the loads to prevent lags
    navLinkColor();
    navLinkClick();

    window.addEventListener('mousemove', function (e) {
        // The goal is to navigate between the different section by clicking on the arrows

        // Register the arrows
        let arrow = document.getElementById('arrow');

        if (this.window.innerWidth - e.clientX > 85 || e.clientY < 125) {
            arrow.style.display = 'none';
            arrow.style.transform = 'rotate(-90deg)';
            return;
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

    document.addEventListener('scroll', function () {
        navLinkColor();
    });

    document.getElementById('arrow').addEventListener('click', async function () {
        let arrow = document.getElementById('arrow');
    
        let currentSection = window.scrollY / window.innerHeight;
        let currentSectionIndex = Math.round(currentSection);
    
        if (arrow.style.transform === 'rotate(180deg)') {
            window.scrollTo({
                top: (currentSectionIndex + 1) * window.innerHeight - 50,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: (currentSectionIndex - 1) * window.innerHeight - 50,
                behavior: 'smooth'
            });
        }
    
        navLinkColor();
    });

    let percentageValues = document.querySelectorAll('.percentageValue');
    let percentageBars = document.querySelectorAll('.percentageBar');

    percentageValues.forEach((element, index) => {
        let value = element.innerHTML;
        percentageBars[index].style.width = value;
    });

    document.getElementById('loadingScreen').style.display = 'none';
});
