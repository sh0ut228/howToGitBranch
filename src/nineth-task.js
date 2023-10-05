const kredit=200000;
const god=2;
const procent=0.10;
console.log(Math.floor(kredit+(kredit*procent)+((kredit+(kredit*procent))*procent)), ', переплата =', Math.floor((kredit+(kredit*procent)+((kredit+(kredit*procent))*procent)) - kredit) );