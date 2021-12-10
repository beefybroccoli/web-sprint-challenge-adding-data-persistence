// build your `/api/projects` router here
const express = require('express');
const router = express();
const modelProjects = require("./model");
const {verifyNewProject, transformArray} = require("./middleware");
const {errorHandler}=require("../errorHandler");
router.use(express.json());
router.use(express.Router());

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
router.get("", async (req, res, next)=>{
    try{
        const array = await modelProjects.getAll();
        transformArray(array, req, res, next);
        res.status(200).json(req.transformedArray);
    }catch(err){
        next(err);
    }
})

// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`
router.post("", verifyNewProject, async (req, res, next)=>{
    try{
        const newProjectId = await modelProjects.insert(req.newProject);
        const array = await modelProjects.get(newProjectId[0]);
        transformArray(array, req, res, next);
        res.status(201).json(req.transformedArray);
    }catch(err){
        next(err)
    }
})

router.use(errorHandler);

module.exports = router;



