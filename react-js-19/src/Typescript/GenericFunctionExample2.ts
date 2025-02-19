function uniqueDataTypeFunc<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue];
}

interface Dog {
    name: string;
    bread: string;
}

const dog1 = uniqueDataTypeFunc<Dog>(
    { name: 'Puppy', bread: 'Labardor' },
    { name: 'default', bread: 'unknown' },


)

console.log(dog1);