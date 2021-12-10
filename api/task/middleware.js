function transformArray(array, req, res, next){
    req.transformedArray = array.map(element=>{
        return {
            ...element, 
            completed: Boolean(element.task_completed) ? true : false
        };
    })
    next();
}

function verifyNewTask(){
    next();
}

async function verifyProjectId(){
    next();
}

module.exports = {transformArray, verifyNewTask, verifyProjectId}
