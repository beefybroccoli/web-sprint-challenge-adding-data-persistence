exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {project_id:1, project_name:'project_1', project_description:"description 1", project_completed:false},
        {project_id:2, project_name:'project_2', project_description:"description 2", project_completed:false},
        {project_id:3, project_name:'project_3', project_description:"description 3", project_completed:false},
        {project_id:4, project_name:'project_4', project_description:"description 4", project_completed:false},
        {project_id:5, project_name:'project_5', project_description:"description 5", project_completed:false},
      ]);
    });
};
