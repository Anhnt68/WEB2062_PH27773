
const weekdays = ['mon', 'tue', 'wed', 'thu','fri', 'sat','sun'];

const openingHours ={
    [weekdays[3]]: {
        open:12,
        close:22,
    },
    [weekdays[4]]: {
        open:11,
        close:23,
    },
    [weekdays[5]]: {
        open:0,
        close:24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'San Francisco',
    categories: ['food', 'pizza', 'vegetarian', 'Orangic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,


   
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];},


    orderDelivery({
        starterIndex =1,
        mainIndex=0, 
        time ='20:00',
        address,
    }) {
        console.log(`orderDelivery! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1,ing2,ing3){
        console.log(
            `here is your decision pasta with ${ing1} and ${ing2} and ${ing3}`
        )
        ;},
    orderPizza(mainIngredient,...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
};


if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}

console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu','fri', 'sat','sun'];

for (const day of days) {
    console.log(day);
    const open = restaurant.openingHours[day]?.open || 'close';
    console.log(`On ${day}, we open at ${open}`);
}


console.log(restaurant.order?.(0,1)?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1)?? 'Method does not exist');


const users = [
    { name: 'John', email: 'hello@jonas.io'}
];


// const users = [];
console.log(users[0]?.name??'user array empty');

if (users.length>0) {
    console.log(users[0].name);
}else{
    console.log('user array empty');
}