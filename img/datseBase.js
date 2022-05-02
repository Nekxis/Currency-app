import {countriesFlags} from "../dataBaseNationalFlags.js"
const priceCurrency = '4.51'
const currencyData = [
    {
        id: 0,
        name: 'USD',
        price: priceCurrency,
        image: countriesFlags.USA.normal,
        symbol: '$',
        color: 'red',
    },
    {
        id: 1,
        name: 'EUR',
        price: priceCurrency,
        image: './7aa757c532b0a752236021195bd5a45d.jpeg',
        symbol: '€',
        color: 'blue',
    },
    {
        id: 2,
        name: 'RUB',
        price: priceCurrency,
        image: './Flag_of_Russia.svg.webp',
        symbol: '₽',
        color: 'blue',
    },
    {
        id: 3,
        name: 'PLN',
        price: priceCurrency,
        image: './unknown.png',
        symbol: 'PLN',
        color: 'red',
    },
    {
        id: 4,
        name: 'GBP',
        price: priceCurrency,
        image: './Flag_of_the_United_Kingdom_(3-5).svg.webp',
        symbol: '£',
        color: 'blue',
    },
    {
        id: 5,
        name: 'CNY',
        price: priceCurrency,
        image: './Flag_of_the_PeopleRepublic_of_China.svg.webp',
        symbol: '¥',
        color: 'red',
    },
    {
        id: 6,
        name: 'CHF',
        price: priceCurrency,
        image: './200px-Civil_Ensign_of_Switzerland_(Pantone).svg.png',
        symbol: 'CHF',
        color: 'red',
    },
    {
        id: 7,
        name: 'AUD',
        price: priceCurrency,
        image: './Flag_of_Australia.svg.webp',
        symbol: 'A$',
        color: 'blue',
    },
    {
        id: 8,
        name: 'CAD',
        price: priceCurrency,
        image: './240px-Flag_of_Canada_(Pantone).svg.webp',
        symbol: 'C$',
        color: 'red',
    },



]


export {currencyData, priceCurrency};
