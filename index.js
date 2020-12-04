require('dotenv').config();
const axios = require("axios");

const OMDB_API_BASE_URL = "https://www.omdbapi.com";
const SEARCH_KEYWORD = "galaxy";

axios
    .get(
        `${OMDB_API_BASE_URL}/?i=tt3896198&apikey=${process.env.OMDB_API_KEY}&s=${SEARCH_KEYWORD}`
    )
    .then((res) =>{
        const movs = res.data.Search;
        movs.map((mov) =>{
            console.log(mov.Title);
        });
    });