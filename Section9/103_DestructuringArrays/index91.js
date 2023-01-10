const restaurant = {
    name: 'Classico Italiano',
    location: 'San Francisco',
    categories: ['food', 'pizza', 'vegetarian', 'Orangic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];},
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

let [first,second] = restaurant.categories;
console.log(first,second);

const temp = first;
first = second;
second = temp;
console.log(first,second);



console.log(restaurant.order(2,0));


const [starter,mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);


const nester = [2,4,[5,6]];
// const [i,,j] = nester;
// console.log(i,j);

const [i,,[j,k]] = nester;
console.log(i,j,k);

const [p=1,q=2,r=3] = [8,9];
console.log(p,q,r);

