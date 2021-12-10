function verifyNewResource(req, res, next){
    if ('resource_name' in req.body === false){
        res.status(400).json({message:`require resource_name`});
    }else if(typeof req.body.resource_name !== 'string' || req.body.resource_name.trim() === ""){
        res.status(400).json({message:`invalid resource_name`});
    }else if('resource_description' in req.body){
        if(typeof req.body.resource_description !== 'string' || req.body.resource_description.trim() === ""){
            res.status(400).json({message:`invalid resource_description`});
        }else{
            next();
        }
    }else{
        next();
    }
}

module.exports = {verifyNewResource};
