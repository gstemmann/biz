const express = require('express')
const router = express.Router()
const db = require('../db')


// router.get("/all", async function (req, res, next) 

//     try {
//         const type = req.query.type;
//         const results = await db.query(
//             `SELECT id, name, type 
//             FROM users
//             WHERE type='${type}'`);
    
//         return res.json(results.rows);
//     }
//     catch (err)   {
//             return next(err)
//         }
//     })


router.get('/', async (req, res) => {
    const results = await db.query(`SELECT * FROM companies`)
    console.log(results)
    return res.json(results.rows)
    
})

module.exports = router;