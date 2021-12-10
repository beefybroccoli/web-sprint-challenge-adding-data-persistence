
exports.up = function(knex) {
    return knex.schema
        .createTable('project', (table)=>{
            table.increments('project_id');
            table.string('project_name').notNullable();
            table.string('project_description');
            table.boolean('project_completed').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project') ;
};
