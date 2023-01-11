
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


const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Risotto',
    'egg',
    'Pasta',
    'Pizza',
    'Risotto',
    'egg',
]);

console.log(ordersSet);
console.log(new Set('anhnt'));
console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('pizza'));


ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

ordersSet.delete('Pizza');
// ordersSet.clear();

console.log(ordersSet);

for (const order of ordersSet) {
    console.log(order);
}

const staff = ['waiter','chef', 'waiter', 'Manager', 'chef', 'Manager'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

