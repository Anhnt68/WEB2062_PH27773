const restaurant = {
    name: 'Classico Italiano',
    location: 'San Francisco',
    categories: ['food', 'pizza', 'vegetarian', 'Orangic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


    openingHours:{
        thu: {
            open:12,
            close:22,
        },
        fri: {
            open:11,
            close:23,
        },
        sat: {
            open:0,
            close:24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];},


    orderDelivery: function ({
        starterIndex =1,
        mainIndex=0, 
        time ='20:00',
        address,
    }) {
        console.log(`orderDelivery! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1,ing2,ing3){
        console.log(
            `here is your decision pasta with ${ing1} and ${ing2} and ${ing3}`
        )
        ;}
};


const arr = [7,8,9];
const badNewArr = [1,2,arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2,...arr];
console.log(newArr);

console.log(...newArr);


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);


const mainMenuCoppy = [...restaurant.mainMenu];
 

const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);


const str = 'Anhnt';
const letters = [...str,'','S.'];
console.log(letters);


const ingredients = [
    // prompt('Let \'s make pasta! ingredient'),
    // prompt('ingredient 2'),
    // prompt('ingredient 3')
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);


const newRestaurant ={foundedIn:1998,...restaurant, founded:'Guiseppe'};
console.log(newRestaurant);


const restaurantCoppy = {...restaurant};
restaurantCoppy.name = 'Ristorante Roma';
console.log(restaurantCoppy.name);
console.log(restaurant.name);