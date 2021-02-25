const querystring = require('querystring');
const fetch = require('node-fetch');

// const API_ENDPOINT = "https://www.nbrb.by/api/exrates/currencies/145";
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

exports = async (event, context) => {

    const {userId} = querystring.parse(event.body);

    const a = await fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => data[0])
        .catch((error) => ({ statusCode: 422, body: String(error) }));
    return ({
        statusCode: 200,
        body: a,
    });
};;