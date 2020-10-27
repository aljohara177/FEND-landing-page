/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName('section');
const navList = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Add class 'active' to section when near top of viewport
function checkSectionInViewPort() {
    for (let section of sections) {
        const position = section.getBoundingClientRect();
        const top = position.top;
        const bottom = position.bottom;
        const isShown = (top >= 0) && (bottom <= innerHeight);
        console.log(isShown);

        if (isShown) {
            checkActiveSection();
            switch (section.dataset.nav) {
                case 'Section 1':
                    document.getElementById('section-1').classList.add('active');
                    console.log('here')
                    break;
                case 'Section 2':
                    document.getElementById('section-2').classList.add('active');
                    break;

                case 'Section 3':
                    document.getElementById('section-3').classList.add('active');
                    break;

                case 'Section 4':
                    document.getElementById('section-4').classList.add('active');
                    break;
            }
        }

    }
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
function getNavigationItems() {
    let i = 1;
    for (let section of sections) {
        const listItem = document.createElement('li');
        listItem.textContent = section.dataset.nav;
        listItem.setAttribute('class', 'menu__link');
        navList.appendChild(listItem);
        listItem.setAttribute('id', 'section-' + i);
        listItem.addEventListener('click', function () {
            //remove active form active section when click
            checkActiveSection();
            section.scrollIntoView({
                behavior: "smooth",
            });
            listItem.classList.add('active');
        });
        i++;
    }
}

// Scroll to section on link click
function checkActiveSection() {
    const sectionsList = document.querySelectorAll('li');
    for (let section of sectionsList) {
        if (section.classList.contains('active')) {
            section.setAttribute('class', 'menu__link');

        }
    }
}

// Set sections as active



getNavigationItems();
window.addEventListener('scroll', function () {
    checkSectionInViewPort();
});
checkSectionInViewPort();
