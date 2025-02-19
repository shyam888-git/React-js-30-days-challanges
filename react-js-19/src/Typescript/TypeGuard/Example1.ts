type MyType = string | number;

export function myFunction(value: MyType) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
}

const res = myFunction("Hello Janjyoti college");

console.log(res);