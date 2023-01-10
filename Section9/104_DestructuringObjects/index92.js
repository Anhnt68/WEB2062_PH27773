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
};

restaurant.orderDelivery({
    time:'22:30',
    address : 'Ninh Binh',
    mainIndex : 2,
    starterIndex : 0,
});


restaurant.orderDelivery({
    address : 'Ha Noi',
    starterIndex :1,
});


const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

const {
    name:restaurantName,
    openingHours: hours,
    categories:tags
} = restaurant;
console.log(restaurantName,hours,tags);


const {menu = [], starterMenu:starters = []} = restaurant;
console.log(menu,starters);

let a = 111;
let b = 999;
const obj = {a:23,b:7,c:14};
({a,b}= obj);
console.log(a,b);

const {
    fri: {open :n,close:m}
    }= openingHours;
console.log(n,m);