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


const arr = [1,2,...[3,4]];
const [a,b,...others] = [1,2,3,4,5];

console.log(a,b,others);

const [pizza, , Risotto,...othersFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,Risotto,othersFood);


const{sat,...weekdays}= restaurant.openingHours;
console.log(weekdays);



const add = function (...number) {
    let sum = 0;
    for (let i=0; i<number.length; i++) {
        sum+=number[i];
    }
    console.log(sum);
}

add(2,3,4);
add(2,3,4,3,3,3);

const x = [23,30,7];
add(...x);

restaurant.orderPizza('orion', 'egg','oliver');
restaurant.orderPizza('orion');