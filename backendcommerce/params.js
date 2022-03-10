import { getProducts } from "./getProductfunction.jsx";
import { useParams } from "react-router-dom";



export function green(){
    const params = useParams
const productId = getProducts(parseInt(params.id));
console.log(productId);
}