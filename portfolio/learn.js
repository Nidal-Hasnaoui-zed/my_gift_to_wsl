
document.addEventListener('DOMContentLoaded', function() {
    const roles = [

        "Diagnostic ",
        "électronique embarquée",
        "premiers secours",
        "gestion des urgences",
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let typingForward = true;

    const typingSpeed = 100; // Typing speed in milliseconds
    const deletingSpeed = 50; // Deleting speed in milliseconds
    const delayBetweenRoles = 2000; // Delay before starting to delete the text

    const spanElement = document.querySelector('.text-animation span');

    function type() {
        const currentRole = roles[roleIndex];

        if (typingForward) {
            // Move forward through characters
            charIndex++;
            if (charIndex > currentRole.length) {
                typingForward = false;
                setTimeout(type, delayBetweenRoles); // Delay before deleting
                return;
            }
        } else {
            // Move backward through characters
            charIndex--;
            if (charIndex < 0) {
                typingForward = true;
                roleIndex = (roleIndex + 1) % roles.length; // Move to next role
                charIndex = 0; // Reset charIndex to avoid negative values
            }
        }

        // Display the current substring
        spanElement.textContent = currentRole.substring(0, charIndex);
        setTimeout(type, typingForward ? typingSpeed : deletingSpeed);
    }

    type();
});


document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon'); 
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a'); 

    window.onscroll = () => {
        let top = window.scrollY;
        
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
