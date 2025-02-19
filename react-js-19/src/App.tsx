import React from 'react'


const App = () => {

    function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string, value: T } {
        const keys = Object.keys(obj);
        const randKey = keys[Math.floor(Math.random() * keys.length)];
        return { key: randKey, value: obj[randKey] };
    }
    const objs = { a: 'hello', b: "how are you", c: "what'sup" };
    const res = getRandomKeyValuePair<string>(objs);
    console.log(res);

    return (
        <div>App</div>
    )
}

export default App