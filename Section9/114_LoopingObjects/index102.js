
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

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} day`);

let openstr = `We are open on ${properties.length} days`;

// for (const iterator of properties) {
//     openstr += `${day}`;
// }
// console.log(openstr);


const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key,{open,close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
