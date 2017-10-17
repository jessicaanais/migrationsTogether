
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Jessica', email:'jess@gmail.com', password:'abc123'},
        {name: 'Andi', email:'andi@gmail.com', password:'123abc'},
        {name: 'Marie', email:'marie@gmail.com', password:'a2b3c'}
      ]);
    });
};
