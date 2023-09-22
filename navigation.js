window.addEventListener('scroll', () => {
    document.querySelector('.navigation').classList.toggle('nav-scroll', window.scrollY > 0);
})

const navIcon = document.querySelector('.floater1 i');

navIcon.addEventListener('click', () => {
    //bottom border
    
    const navMenu = document.querySelector('.floater1 .nav-menu');
    navMenu.classList.toggle('mobile-menu');
    //change icon
    if(navIcon.className === 'fa fa-bars'){
        navIcon.className = 'fa fa-xmark';
        // document.querySelector('nav').style.borderBottom = '2px solid var(--secondary-color)';
    } else{
        navIcon.className = 'fa fa-bars';
        // document.querySelector('nav').style.borderBottom = 'none';
    }
})



