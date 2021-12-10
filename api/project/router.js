// build your `/api/projects` router here
const express = require('express');
const router = express();
router.use(express.json());

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
router.get("", async (req, res)=>{
    res.status(503).json({message:"GET /api/projects not ready yet"});
})

// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`
router.post("", async (req, res)=>{
    res.status(503).json({message:"POST /api/projects not ready yet"});
})

module.exports = router;



