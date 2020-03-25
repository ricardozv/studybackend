const express = require ('express');

const app = express();

app.get('/', (request, response)=> {
    return response.json({
        comprimento: "Fala cumpade!",
        respota:"De boas"
    })

});

app.listen(3333);