//  import str from './models/Search';

//  //import { add as a, multiply as m, ID } from './views/searchView';
//  import * as searchView from './views/searchView';

// console.log(`Using imported functions! ${searchView.add(searchView.ID,2)} and ${searchView.multiply(3, 5)}. ${str} `);


// https://www.food2fork.com/api/search
// ad37641e7bc849af5c0e44f9f300592e

import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://crossorigin.me/';
    const key = 'ad37641e7bc849af5c0e44f9f300592e';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch(error) {
        alert(error);
    }
}

getResults('tomato pasta');