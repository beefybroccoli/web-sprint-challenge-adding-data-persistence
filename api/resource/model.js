// build your `Resource` model here
const db = require("../../data/dbConfig");

async function getAll(){
    return await db('resources');
}

async function get(resource_id){
    return await db('resources').where("resource_id", resource_id);
}

async function insert(resource){
    return await db('resources').insert(resource);
}

module.exports = {getAll, get, insert};