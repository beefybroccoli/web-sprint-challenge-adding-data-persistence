// build your `/api/resources` router here
const express = require('express');
const router = express();
router.use(express.json());

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`
router.get("", async (req, res)=>{
    res.status(503).json({message:"GET /api/resources not ready yet"});
})

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`
router.post("", async (req, res)=>{
    res.status(503).json({message:"POST /api/resources not ready yet"});
})

module.exports = router;



