function getRandomKeyValuePair<T>(obj:{[key:string]:T}):{key:string, value:T}{
    const keys=Object.keys(obj);
    const randomeKeys=keys[Math.floor(Math.random()*keys.length)]
    return {key:randomeKeys, value:obj[randomeKeys]}
}

const stringObj={a:"hello", b:"how are you" , c:"what's up"};
const numberObje={a:1, b:2, c:3};
const response=getRandomKeyValuePair<string>(stringObj);

const numberRes=getRandomKeyValuePair<number>(numberObje);
console.log(numberRes);
console.log(response);