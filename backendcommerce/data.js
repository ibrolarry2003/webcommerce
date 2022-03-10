import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Ibrahim',
            email: 'admin@trevohealthsolutions.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
          },
          {
            name: 'Yetunde',
            email: 'wife@trevohealthsolutions.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
          },
          {
            name: 'Folake',
            email: 'flakky@trevohealthsolutions.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
          },
    ],
   products: [
        {  name: "Trevo-32 ounces", category: "health",
        image: "https://trevocorporate.com/wp-content/uploads/2013/10/LargeBottle.jpg", 
        price: 45000, countInStock: 10, brand: "Health", ratings: 2.0, reviewz: 6,
    description: "High quality" },

    { name: "Trevo-16 ounces", category: "health",
    image: "https://trevocorporate.com/wp-content/uploads/2013/10/SmallBottle.jpg", 
    price: 23000, countInStock: 5,brand: "Health", ratings: 5.0, reviewz: 8,
description: "High quality" },

{ name: "RP3 By Trevo-60 counts", category: "health",
image: "https://trevocorporate.com/wp-content/uploads/2018/05/RP3-Bottles-Staggered-400x512.png",
 price: 20000, countInStock: 2, brand: "Health", ratings: 4.5, reviewz: 8,
description: "High quality" },

{  name: "RP3 By Trevo-20 counts", category: "health",
image: "https://trevocorporate.com/wp-content/uploads/2018/05/RP3-Bottles-Staggered-400x512.png",
 price: 10000, countInStock: 0, brand: "Health", ratings: 3.5, reviewz: 8,
description: "High quality" },

{  name: "FP3 By Trevo-60 counts", category: "health",
image: "https://trevocdn.blob.core.windows.net/public/images/trevo-fp3-flavors.png", 
price: 22000,countInStock: 4, brand: "Health", ratings: 4.0, reviewz: 8,
description: "High quality" },

{  name: "FP3 By Trevo-20 counts", category: "health",
image:"https://trevocdn.blob.core.windows.net/public/images/trevo-fp3-flavors.png",
 price: 10000 ,countInStock: 2,brand: "Health", ratings: 4.0, reviewz: 8,
description: "High quality" },

{ name: "Shield By Trevo-60 counts", category: "health",
image: "/images/loi.jpg", price: 20000, countInStock: 0, brand: "Health", ratings: 4.0, reviewz: 20,
description: "High quality" },

    ]
};

export default data;





