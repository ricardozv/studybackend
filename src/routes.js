const  express = require('express');
const routes = express.Router();

routes.post('/users', (request, response)=> {
    const body = request.body;

    console.log(body);
    
    return response.json({
        comprimento: "Fala cumpade!",
        respota:"De boas",
        Lombra: "E que lombra!",
    });

});

module.exports = routes;