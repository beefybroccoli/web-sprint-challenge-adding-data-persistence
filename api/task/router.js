// build your `/api/tasks` router here
const express = require('express');
const router = express();
router.use(express.json());

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
router.get("", async (req, res)=>{
    res.status(503).json({message:"GET /api/tasks not ready yet"});
})

// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`
router.post("", async (req, res)=>{
    res.status(503).json({message:"POST /api/tasks not ready yet"});
})

module.exports = router;