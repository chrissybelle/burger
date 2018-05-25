var express = require("express");
var router = express.Router();
//import the model (burger.js) to use its database functions
var burger = require("../models.burger.js");

//create routes
router.get("/", function(req, res) {
    burger.seletAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req,body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId }); //************ */
    });
});

//******************************************* */
router.put("/api/burgers/:id", function(req, res) {
    // var condition = 
});

//export routes for server.js to use
module.exports = router;