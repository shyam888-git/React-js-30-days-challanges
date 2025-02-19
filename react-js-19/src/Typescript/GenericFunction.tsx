export function uniqueDataTypes<Type>(item: Type, defaultValue: Type): [Type, Type] {
    return [item, defaultValue]
}

const num = uniqueDataTypes<number>(10, 20);
console.log(num);

const string = uniqueDataTypes<string>("Hello ", "How are you");

const bool = uniqueDataTypes<boolean>(true, false);


console.log(string);