import {currencyData, price} from "./dataBase2.js";
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const menuContainer = document.querySelector('.menu-container');
const menuList = document.querySelector('.menu-list');
const inputContainer = document.querySelector('.input-container');
const searchInput = document.querySelector('.text-field');
const clearButton = document.querySelector('.clear-input');
const liNav = document.querySelector('li')
const apiKey = '4fea2ddd350e4b5397126f3b42e462b2';
const symbol = 'EUR';
const url = `https://api.currencyfreaks.com/latest?apikey=${apiKey}&symbols=${symbol}`
const body = document.querySelector('body');
// const fetchAPI = () => {
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log((data));
//         })
//
// }
const prepareElements = () => {
    const cardSection = document.querySelector('.cards-container');
    cardSection.innerHTML = "";
    for (let i = 0; i < currencyData.length; i++) {
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerHTML = ` 
            <div class="left-part">
               <h3>${currencyData[i].symbol.name}</h3>
                  <div class="bottom">
                           <p>${currencyData[i].symbol}</p>
                           <p>${currencyData[i].price}</p>
                           <p>${currencyData[i].symbol_native}</p>
                  </div>
            </div>
            <div class="flaga">
                 <img src='${currencyData[i].flag} ' style="box-shadow: 0 0 2em ${currencyData[i].color};">
            </div>
        `
        cardSection.appendChild(newCard);
    }


}




const openUp = () => {
    setTimeout(()=> menuList.classList.remove('close-menu-list'),500);
    menuContainer.classList.add('active');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
};
const closeUp = () => {
    menuContainer.classList.remove('active');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    menuList.classList.add('close-menu-list')

};

const inputClear = () => {
    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        clearButton.style.display = 'none';
        inputContainer.style.borderBottomColor = '#d1d1d1';
    })
};
const inputActive = () => {
    if (searchInput.value !== ''){
        clearButton.style.display = 'inline-block';
        inputContainer.style.borderBottomColor = '#000';
    } else {
        clearButton.style.display = 'none';
    }
    inputClear();
}
openBtn.addEventListener('click', openUp);
closeBtn.addEventListener('click', closeUp);
searchInput.addEventListener('keyup', inputActive);
document.addEventListener('click', (e) =>{
    if (e.target === searchInput) {
        inputContainer.style.borderBottomColor = '#000';
    } else {
        inputContainer.style.borderBottomColor = '#d1d1d1';
    }
});
// document.addEventListener('DOMContentLoaded', fetchAPI)
document.addEventListener('DOMContentLoaded', prepareElements);





