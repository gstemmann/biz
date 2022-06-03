const express = require('express')
// const { next } = require('process')
const ExpressError = require("../expressError")
const db = require('../db')

let router = express.Router()

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


router.get('/', async (req, res, next) => {   
    try {
        const results = await db.query(`SELECT code, name FROM companies`);
        return res.json({"companies": results.rows});
    } catch (err) {
        return next(err)
    }
})

module.exports = router;