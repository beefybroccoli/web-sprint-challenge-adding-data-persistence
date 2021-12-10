function verifyNewProject(req, res, next) {
    if('project_name' in req.body === false || typeof req.body.project_name !== 'string' || req.body.project_name === ""){
        res.status(400).json({message:`invalid project_name`})
    }else{
        next();
    }
}