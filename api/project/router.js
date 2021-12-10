const express = require('express');
const router = express();
const modelProjects = require("./model");
const {verifyNewProject, transformArray} = require("./middleware");

router.use(express.Router());

router.get("", async (req, res, next)=>{
    try{
        const array = await modelProjects.getAll();
        transformArray(array, req, res, next);
        res.status(200).json(req.transformedArray);
    }catch(err){
        next(err);
    }
})

router.post("", verifyNewProject, async (req, res, next)=>{
    try{
        const newProjectId = await modelProjects.insert(req.newProject);
        const array = await modelProjects.get(newProjectId[0]);
        transformArray(array, req, res, next);
        res.status(201).json(req.transformedArray[0]);
    }catch(err){
        next(err)
    }
})

module.exports = router;
