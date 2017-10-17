
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flight').del()
    .then(function () {
      // Inserts seed entries
      return knex('flight').insert([
        {start: 'Phoenix,AZ', destination:'San Diego, CA', airline_id:1},
        {start: 'Las Vegas, NV', destination:'Chicago, IL', airline_id:2},
        {start: 'Tampa, FL', destination:'Washington, UT', airline_id:3}
      ]);
    });
};
