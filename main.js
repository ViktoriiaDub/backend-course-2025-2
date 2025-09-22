
const { URL, URLSearchParams } = require('url');


const CURRENCY = "JPY";          
const EXACT_DATE = "20240127";   


const myUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");


myUrl.search = new URLSearchParams({
    valcode: CURRENCY,
    date: EXACT_DATE,
    json: ""      
}).toString();

console.log(myUrl.href);

