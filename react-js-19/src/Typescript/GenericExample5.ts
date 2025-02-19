export function reverse<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}

const res = reverse<number, number>(1, 2);

const res1 = reverse<string, number>("Hello world", 4);

console.log(res);
console.log(res1);
