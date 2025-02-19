// function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
//     return array.filter((item) => condition(item));

// }

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];

// const res = filterArray<number>(numberArray, (num) => num % 2 === 0);
// console.log(res);


// const stringArray = ["apple", "banana", "cherry"];

// const res1 = filterArray<string>(stringArray, (item) => item.length < 5)
// console.log(res1);

// interface Fruits {
//     name: string;
//     color: string;
// }


// const fruitsArray: Fruits[] = [{ name: "Apple", color: "red" }, { name: "banana", color: "yellow" }, { name: "cherry", color: "red" }];

// const res3 = filterArray<Fruits>(fruitsArray, (fruit) => fruit.color === 'red');
// console.log(res3);

export function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 8, 10, 11];
const res = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(res);


const stringArray = ["Apple", "Banana", "Cucumber", "Orange"];
const res1 = filterArray<string>(stringArray, (item) => item.length < 6);
console.log(res1);

interface Fruits {
    name: string;
    color: string;
}

const Fruits: Fruits[] = [{ name: 'Apple', color: "red" }, { name: "Banana", color: "Yellow" }, { name: "Grapes", color: 'green' }];

const res3 = filterArray<Fruits>(Fruits, (fruit) => fruit.color === 'red');
console.log(res3);