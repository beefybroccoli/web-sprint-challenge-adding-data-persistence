function verifyNewProject(req, res, next) {
    if('project_name' in req.body === false || typeof req.body.project_name !== 'string' || req.body.project_name === ""){
        res.status(400).json({message:`invalid project_name`})
    }else{
        const newProject = {
            project_name : req.body.project_name,
            project_description: 'project_description' in req.body ? req.body.project_description : null,
            project_completed: 'project_completed' in req.body ? req.body.project_completed: false
        }
        req.newProject = newProject;
        next();
    }
}

function transformArray(array, req, res, next){
    req.transformedArray =  array.map(element=>{
        return {...element, project_completed : (element.project_completed === 1 ? true : false)}
    });
    next();
}

module.exports={verifyNewProject, transformArray};