import {currencyData, currencyPrice} from "./dataBase2.js";
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const menuContainer = document.querySelector('.menu-container');
const menuList = document.querySelector('.menu-list');
const inputContainer = document.querySelector('.input-container');
const searchInput = document.querySelector('.text-field');
const clearButton = document.querySelector('.clear-input');
const liNav = document.querySelector('li');
const cards = document.querySelector('.card');
const apiKey = '4fea2ddd350e4b5397126f3b42e462b2';
// const url = `https://api.currencyfreaks.com/latest?apikey=${apiKey}&symbols=${symbol}`;

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
    for (let i = 0; i < currencyData.length; i++) {
        const newCard = document.createElement('div');
        newCard.id =`${currencyData[i].id}`;
        newCard.className = `card ${currencyData[i].symbol} ${currencyData[i].name}`;
        newCard.innerHTML = ` 
            <div class="left-part">
               <h2 class="country-name">${currencyData[i].name}</h2>
                  <div class="bottom">
                           <p>${currencyData[i].symbol}</p>
                           <p>${currencyData[i].price} ${currencyData[0].symbol_native}</p>
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
const searchBar = () => {
    const cards = document.querySelectorAll('.card');
    const cardSection = document.querySelector('.cards-container');
    const inputValue = searchInput.value;


    currencyData.forEach(card => {
        const names = card.name;
        const lowerNames = card.name.toLowerCase();
        console.log(lowerNames)
        const id = card.id;
        const lowerId = card.id.toLowerCase();
        const symbols = card.symbol_native;
        const show = names.includes(inputValue) || id.includes(inputValue) || lowerNames.includes(inputValue) ||
            symbols.includes(inputValue) || lowerId.includes(inputValue);
        const element = document.querySelector(`#${id}`);
        if (show === true){
            element.style.display = 'flex'
        } else {
            element.style.display = 'none';
        }


    });
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
searchInput.addEventListener('input', searchBar);
clearButton.addEventListener('click', () => {
     document.location.reload();
} )
document.addEventListener('click', (e) =>{
    if (e.target === searchInput) {
        inputContainer.style.borderBottomColor = '#000';
    } else {
        inputContainer.style.borderBottomColor = '#d1d1d1';
    }
});
// document.addEventListener('DOMContentLoaded', fetchAPI)
document.addEventListener('DOMContentLoaded', prepareElements);




