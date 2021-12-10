const db = require("../../data/dbConfig");

async function getAll(){
    return await db('projects');
}

async function get(project_id){
    return await db('projects').where("project_id", project_id);
}

async function insert(project){
    return await db('projects').insert(project);
}

module.exports = {getAll, get, insert };