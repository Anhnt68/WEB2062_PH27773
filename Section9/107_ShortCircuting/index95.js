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
        ;},
    orderPizza: function(mainIngredient,...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
};


console.log(3||"Anhnt");
console.log(''||"Anhnt");
console.log(true||0);
console.log(undefined||null);

console.log(undefined || 0 || 'hello' || 23||null);

// restaurant.numGuests = 11;
const guests1= restaurant.numGuests?restaurant.numGuests:10;
console.log(guests1);


 const guests2=restaurant.numGuests || 10;
 console.log(guests2);


 console.log(0 &&'anhnt');
 console.log(10 && 'anhnt');
 console.log('hello' &&30 && null && 'anhnt');


 if (restaurant.orderPizza){
    restaurant.orderPizza('mushRoom', 'spinach');
 }

 restaurant.orderPizza && restaurant.orderPizza('egg', 'onion');