
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {user_id: 1, title:'Phoenix', description:'Crazy hot', flight_id:1},
        {user_id: 2, title:'Las Vegas', description:'Jackpot', flight_id:2},
        {user_id: 3, title:'Tampa', description:'Humid', flight_id:3}
      ]);
    });
};
