
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {task_id: 1, task_description:'description 1', task_notes:'note 1', task_completed:false,project_id:1},
        {task_id: 2, task_description:'description 2', task_notes:'note 2', task_completed:false,project_id:2},
        {task_id: 3, task_description:'description 3', task_notes:'note 3', task_completed:false,project_id:3},
        {task_id: 4, task_description:'description 4', task_notes:'note 4', task_completed:false,project_id:4},
        {task_id: 5, task_description:'description 5', task_notes:'note 5', task_completed:false,project_id:5},
      ]);
    });
};
