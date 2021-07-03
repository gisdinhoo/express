
const mongoDb = require("../mongoDB/mongoDb");
const express = require("express");
const router = express();

//get On
router.get("/one", async (req, res) =>{ 
    res.send(await mongoDb.getOne());
});

//get 100
router.get("/hundred", async (req, res) =>{ 
    res.send(await mongoDb.getHundred());
});

//root
router.get("/", async (req, res) =>{ 
    res.send("Hello World !");
});

//get by name
router.get("/name/:name", async (req, res) =>{ 
    restau = await mongoDb.getByName(req.params.name);
    if(restau.length === 0){
        res.status(404).send("Aucun restaurant trouve");
    }else{
        res.send(restau);
    }   
});

module.exports = router;