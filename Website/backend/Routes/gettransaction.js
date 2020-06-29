const express = require('express');
const verifyToken = require('../Helpers/verifytoken')
const bodyParser = require('body-parser')
const router = express.Router()
const Trans = require('../Models/Transaction')

router.use(bodyParser())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.use(verifyToken)

router.post('/', (req, res) => {

    // console.log("sxdcftgyhujkxsdcfvbhjmk,dcfvgbhjmk,")
    // console.log(req.body.acc)
    const re1 = Trans.find({ from: req.body.acc }).then((updatedDoc1) => {
        // console.log(updatedDoc1)
        res.status(200).send(updatedDoc1);
    }).catch(err => {
        // console.log(err)
    })

});
module.exports = router
