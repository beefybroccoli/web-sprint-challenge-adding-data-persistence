const express = require('express');
const router = express();
const {errorHandler}=require("../errorHandler");
const modelResources = require("./model");
const {verifyNewResource} = require("./middleware");

router.use(express.json());
router.use(express.Router());

router.get("", async (req, res, next)=>{
    try{
        const array = await modelResources.getAll();
        res.status(200).json(array);
    }catch(err){
        next(err);
    }
})

router.post("", verifyNewResource, async (req, res, next)=>{
    try{
        const {resource_name, resource_description} = req.body;
        const newResourceId = await modelResources.insert({resource_name, resource_description : resource_description || null});
        const newResource = await modelResources.get(newResourceId[0]);
        res.status(201).json(newResource[0]);
    }catch(err){
        next(err)
    }
})

router.use(errorHandler);

module.exports = router;



