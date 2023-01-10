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

const rest1 = {
    name : 'Caprice',
    // numGuests :20,
    numGuests :0,
};
const rest2 = {
    name : 'La Piazza',
    owner:'Giovani Rossi',
};

rest1.numGuests = rest1.numGuests ||10;                                                                                                                                             
rest2.numGuests = rest2.numGuests ||10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;



rest1.owner = rest1.owner && 'rest';
rest2.owner = rest2.owner && 'rest';


rest1.owner &&= '<anonymous>';
rest2.owner &&= '<anonymous>';

console.log(rest1);
console.log(rest2);