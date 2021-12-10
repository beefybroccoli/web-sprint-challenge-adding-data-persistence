const db = require("../../data/dbConfig");

async function getAll(){
    return await db('project');
}

async function get(project_id){
    return await db('project').where("project_id", project_id);
}

async function insert(project){
    return await db('project');
}

module.exports = {getAll, get, insert };