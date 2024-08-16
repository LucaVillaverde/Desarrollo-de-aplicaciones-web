document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        if (navMenu.style.maxHeight) {
            navMenu.style.maxHeight = null;
        } else {
            navMenu.style.maxHeight = navMenu.scrollHeight + "px";
        }
    });
});
