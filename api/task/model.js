const db = require("../../data/dbConfig");

async function getAll(){
    return await db('tasks as t')
        .leftJoin('users as u', 'u.user_id', 't.task_id');
}

async function get(task_id){
    return await db('tasks').where('task_id', task_id);
}

async function insert(task){
    return await db('tasks').insert(task);
}

module.exports = {getAll, get, insert};