const modelProject = require("../project/model");

function transformArray(array, req, res, next){
    req.transformedArray = array.map(element=>{
        return {
            ...element, 
            task_completed: Boolean(element.task_completed) ? true : false
        };
    })
    next();
}

function verifyNewTask(req, res, next){

    let errorMessage = "";
    
    if('task_description' in req.body === false){
        errorMessage = "require task_description";
    }else if (typeof req.body.task_description !== 'string' || req.body.task_description.trim() === ''){
        errorMessage = "invalid task description, non empty string"
    }else if ('task_notes' in req.body){
        if(typeof req.body.task_notes !== 'string' || req.body.task_notes.trim() === ""){
            errorMessage = "invalid task_notes, non empty string";
        }
    }else if ('task_completed' in req.body){
        if(typeof req.body.task_completed !== 'boolean'){
            errorMessage = "invalid task_completed, true or false value";
        }
    }else if ('project_id' in req.body === false){
        errorMessage = "require project_id"
    }else if (typeof req.body.project_id !== 'number' || req.body.project_id < 0){
        errorMessage = "invalid project_id, number and greater than 0"
    }


    if(errorMessage !== ""){
        res.status(400).json({message:errorMessage});
    }else{
        next();
    }
}

async function verifyProjectId(req, res, next){
    const array = await modelProject.get(req.body.project_id);
    if(array.length === 0){
        res.status(404).json({message: `project id ${req.body.project_id} not found`});
    }else{
        next();
    }
}

module.exports = {transformArray, verifyNewTask, verifyProjectId}