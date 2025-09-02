const express = require('express');
const router = express.Router();
const db = require('../config/db');


router.get('/',async  (req, res) =>{
    try{
        const [rows] = await db.query("SELECT id, nome, email FROM usuario");
        res.json(rows);
    }catch(error){
        console.log('Error: ', error);
        res.status(500).json({error: "Erro ao buscar usarios"})
    }
});

module.exports = router;