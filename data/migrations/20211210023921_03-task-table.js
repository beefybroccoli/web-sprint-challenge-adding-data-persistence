exports.up = function(knex) {
    return knex.schema
        .createTable('tasks', (table)=>{
            table.increments('task_id');
            table.string('task_description').notNullable();
            table.string('task_notes');
            table.boolean('task_completed');
            table.integer('project_id').notNullable();
            table.foreign('project_id').references('project_id').inTable('projects');
            
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks') ;
};
