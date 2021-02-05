import React, { useState } from 'react';

const ChuckNorris = () => {
    const [joke, setJoke] = useState();

    const handleFetch = () => {
        const url = "https://api.chucknorris.io/jokes/random"
        fetch (url)
        .then(res => res.json())
        .then(json => {
            setJoke(json.value)
            console.log(json.value);
        })
    }
    
    return (
        <div>
            <h3>{joke}</h3>
            <button onClick={() => handleFetch()}>Fetch a Chuck Norris Joke!</button>
        </div>
    );
}
 
export default ChuckNorris;

/*
Use the following documentation to view how to use the Chuck Norris API
Choose the random joke generation.
Test the url in postman to see what response you are getting back.
Store joke in a useState
Make the button call a function called handleFetch()
inside the function handleFetch() is where you will be doing the fetch
*/