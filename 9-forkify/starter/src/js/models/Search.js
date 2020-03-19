// Search.js: const res = await axios(`${PROXY}http://food2fork.com/api/search?key=${KEY}&q=${this.query}`); -> replace with line below
// const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);

import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}





