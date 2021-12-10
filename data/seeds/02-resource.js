exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {resource_id: 1, resource_name:'resource 1', resource_description:'description 1'},
        {resource_id: 2, resource_name:'resource 2', resource_description:'description 2'},
        {resource_id: 3, resource_name:'resource 3', resource_description:'description 3'},
        {resource_id: 4, resource_name:'resource 4', resource_description:'description 4'},
        {resource_id: 5, resource_name:'resource 5', resource_description:'description 5'},
      ]);
    });
};
