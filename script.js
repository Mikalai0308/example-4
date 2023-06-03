const menuBtn = document.querySelector('.menu-btn');
const mobileLogoNav = document.querySelector('.mobile-logo-nav');
const leftSideBar = document.querySelector('.left-side-bar');
const btnClose = document.querySelector('.close-btn');
const desktopDropDownBtn = document.querySelectorAll('.menu-title');
const desktopDropdownMenu = document.querySelectorAll('.dropdown-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.style.display = 'none'; 
    mobileLogoNav.style.left = '50%';
    leftSideBar.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    menuBtn.style.display = 'block';
    mobileLogoNav.style.left = '-50%';
    leftSideBar.style.display = 'none';
});

for (let i = 0; i < desktopDropDownBtn.length; i = i + 1 ) {
    desktopDropDownBtn[i].addEventListener('click', ()=> {
        desktopDropdownMenu[i].classList.toggle('show-dropdown-menu');
    })
}