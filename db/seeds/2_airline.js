
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airline').del()
    .then(function () {
      // Inserts seed entries
      return knex('airline').insert([
        {name: 'Southwest Airplines', description: 'Cheap'},
        {name: 'American Airlines', description: 'Travel Packages'},
        {name: 'Frontier Airlines', description: 'Ultra low prices'}
      ]);
    });
};
