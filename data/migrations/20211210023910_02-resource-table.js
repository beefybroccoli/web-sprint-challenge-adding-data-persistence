
exports.up = function(knex) {
    return knex.schema
        .createTable('resource', (table)=>{
            table.increments('resource_id');
            table.string('resource_name').notNullable().unique();
            table.string('resource_description');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resource') ;
};
