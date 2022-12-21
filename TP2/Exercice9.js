const querystring = require("querystring") ;
const url = require ("url");


const link = "https://github.com/UsakiDJ/NodeJsCoursDridiJessim/search?l=javascript"

let pom = querystring.parse(url.parse(link).query);

console.log(pom);