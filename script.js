const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const menuContainer = document.querySelector('.menu-container');
const menuList = document.querySelector('.menu-list');

const openUp = () => {
    menuContainer.classList.add('active');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    menuList.classList.remove('close-menu-list')
}
const closeUp = () => {
    menuContainer.classList.remove('active');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    menuList.classList.add('close-menu-list')
}

openBtn.addEventListener('click', openUp);
closeBtn.addEventListener('click', closeUp);
