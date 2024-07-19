function randomHeaderNavLinkColor() {
    let linksHolder = document.querySelectorAll('.randomLinkColorHolder');
    // Console log the childrens
    console.log(linksHolder);
    let colors = [
        'F8F7FF',
        '46B1C9',
        'F6AE2D',
        '84E296',
        'FF6F59'
    ];

    let links = [];
    
    for (let i = 0; i < linksHolder.length; i++) {
        linksHolder[i].childNodes.forEach(child => {
            child.childNodes.forEach(child => {
                if (child.tagName === 'A') {
                    links.push(child);
                }
            });
        });
        console.log(links);
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', () => {
            links[i].style.color = `#${colors[i]}`;
            links[i].style.setProperty('--pseudo-background-color', `#${colors[i]}`);
        });
        links[i].addEventListener('mouseout', () => {
            links[i].style.color = `#${colors[0]}`;
        });
    }

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

randomHeaderNavLinkColor();
setAge();
