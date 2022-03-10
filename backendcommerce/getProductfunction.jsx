import data from './data'
const mydi = data;


 export function getProducts(num){
    return mydi.products.find(product => product.id === num);
    

    };



    