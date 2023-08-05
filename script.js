const initApp = () =>{
    const hambugerBtn = document.getElementById('hambuger-btn');
    const mobileMenu = document.getElementById('drop-down-menu');

    const toggleMenu = () =>{
        mobileMenu.style.display = 'none'
        mobileMenu.style.display = 'flex'
    }

    hambugerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)