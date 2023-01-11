
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

const rest = new Map();


rest.set('name', 'Classical Italiano');
rest.set(1, 'Classical, VietNam');


console.log(rest.set(2, 'Lisbon, Itali'));


rest.set('categories', ['food', 'pizza', 'vegetarian', 'Orangic']).set('open',1).set('close',23).set(true, 'we are open').set(false,'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));


const time = 21;
console.log(rest.get(time > rest.get('open')&&time<rest.get('close')));

console.log(rest.has('categories'));


const arr= [1,2];
rest.set(document.querySelector('h1'), 'Heading')
rest.delete(2);
rest.set(arr,'test');
console.log(rest);

console.log(rest.size);
console.log(rest.get(arr));