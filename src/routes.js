const  express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/microbank', async (request, response)=> {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('microbank').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });
    
    return response.json({ id });

});

module.exports = routes;