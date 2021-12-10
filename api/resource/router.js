// build your `/api/resources` router here
const express = require('express');
const router = express();
router.use(express.json());

router.get("", async (req, res)=>{
    res.status(503).json({message:"GET /api/resources not ready yet"});
})

router.post("", async (req, res)=>{
    res.status(503).json({message:"POST /api/resources not ready yet"});
})

module.exports = router;