const the_products = {
   productz: [
        { id: 1, name: "Trevo-32 ounces", category: "health",
        image: "https://trevocorporate.com/wp-content/uploads/2013/10/LargeBottle.jpg", price: "45,000", countInStock: 10, brand: "Health", ratings: 2.0, reviewz: 6,
    description: "High quality" },

    { id: 2, name: "Trevo-16 ounces", category: "health",
    image: "https://trevocorporate.com/wp-content/uploads/2013/10/SmallBottle.jpg", price: "23,000",countInStock: 10,brand: "Health", ratings: 5.0, reviewz: 8,
description: "High quality" },

{ id: 3, name: "RP3 By Trevo-60 counts", category: "health",
image: "https://trevocorporate.com/wp-content/uploads/2018/05/RP3-Bottles-Staggered-400x512.png", price: "20,000", countInStock: 0, brand: "Health", ratings: 4.5, reviewz: 8,
description: "High quality" },

{ id: 4, name: "RP3 By Trevo-20 counts", category: "health",
image: "https://trevocorporate.com/wp-content/uploads/2018/05/RP3-Bottles-Staggered-400x512.png", price: "10,000", countInStock: 0, brand: "Health", ratings: 3.5, reviewz: 8,
description: "High quality" },

{ id: 5, name: "FP3 By Trevo-60 counts", category: "health",
image: "https://trevocdn.blob.core.windows.net/public/images/trevo-fp3-flavors.png", price: "22,000",brand: "Health", ratings: 4.0, reviewz: 8,
description: "High quality" },

{ id: 6, name: "FP3 By Trevo-20 counts", category: "health",
image:"https://trevocdn.blob.core.windows.net/public/images/trevo-fp3-flavors.png", price: "10,000",brand: "Health", ratings: 4.0, reviewz: 8,
description: "High quality" },

{ id: 7, name: "Shield By Trevo-60 counts", category: "health",
image: "./images/pi.png", price: "20,000",brand: "Health", ratings: 4.0, reviewz: 20,
description: "High quality" },

    ]
};

export default the_products;

export function getProducts(num){
return the_products.productz.find(productt => productt.id === num)
};



