// build your `/api/projects` router here
const express = require('express');
const router = express();
router.use(express.json());

router.get("", async (req, res)=>{
    res.status(503).json({message:"GET /api/projects not ready yet"});
})

router.post("", async (req, res)=>{
    res.status(503).json({message:"POST /api/projects not ready yet"});
})

module.exports = router;