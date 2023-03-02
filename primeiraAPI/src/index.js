const { response } = require('express');
const express = require('express');

const app = express();

app.get('/texto', (request, response) => {
    return response.json(":'D");
    }
);

app.get('/json', (request, response) => {
    return response.json({
        "nome": "João",
        "idade": 20
    });
});

app.listen(3000);