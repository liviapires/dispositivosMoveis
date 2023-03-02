const { response } = require('express');
const express = require('express');

const app = express();

app.get('/products', (request, response) => {
    return response.json(
        [{
            "id": 1,
            "name": "Caderno Pequeno",
            "image": "cadernopequeno.jpg",
            "category": "Papelaria",
            "description": "Caderno pequeno de 40 folhas",
            "status": "Disponível",
        },
        {
            "id": 2,
            "name": "Caderno Grande",
            "image": "cadernogrande.jpg",
            "category": "Papelaria",
            "description": "Caderno grande de 100 folhas",
            "status": "Disponível",
        },
    ]
    );
    }
);

app.post('/products', (request, response) => {
    const body = request.body;
    console.log(body);
    const {name, image, category, description, status} = request.body;
    min = Math.ceil(0);
    max = Math.floor(99);
    const id = Math.floor(Math.random() * (max - min + 1)) + min;

    let object = {
        id,
        name,
        image,
        category,
        description,
        status
    }

    return response.json(object);
});

app.listen(3000);