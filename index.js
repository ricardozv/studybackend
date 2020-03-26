const express = require ('express');

const app = express();

app.use(express.json());

app.post('/users', (request, response)=> {
    const body = request.body;

    console.log(body);
    
    return response.json({
        comprimento: "Fala cumpade!",
        respota:"De boas",
        Lombra: "E que lombra!",
    });

});

app.listen(3333);