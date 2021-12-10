// build your `/api/tasks` router here
const express = require('express');
const router = express();
const {errorHandler}=require("../errorHandler");
const modelTasks = require("./model");
const {verifyNewTask, transformArray, verifyProjectId} = require("./middleware");

router.use(express.json());
router.use(express.Router());

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
router.get("", async (req, res, next)=>{
    try{
        const array = await modelTasks.getAll();
        transformArray(array, req, res, next);
        res.status(200).json(req.transformedArray);
    }catch(err){
        next(err);
    }
})

// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`
router.post("", verifyNewTask, verifyProjectId, async (req, res, next)=>{
    try{

        const newTask = {
            task_description : req.body.task_description,
            task_notes : 'task_notes' in req.body ? req.body.task_notes : null,
            task_completed: 'task_completed' in req.body ? req.body.task_completed : false,
            project_id : req.body.project_id
        }
        const newTaskId = await modelTasks.insert(newTask);
        const array = await modelTasks.get(newTaskId[0]);
        transformArray(array, req, res, next);
        res.status(201).json(req.transformedArray[0]);
    }catch(err){
        next(err);
    }
})

router.use(errorHandler);

module.exports = router;