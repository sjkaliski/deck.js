define([
  'models/table',
  'models/tables',
  'models/user',
  'models/users',
  'models/card',
  'models/cards'
], function(Table, Tables, User, Users, Card, Cards) {

  Table.has()
    .many('users', {
      collection: Users,
      inverse: 'table'
    })
    .many('cards', {
      collection: Cards,
      inverse: 'table'
    });

  User.has()
    .one('table', {
      model: Table,
      inverse: 'users'
    })
    .many('cards', {
      collection: Cards,
      inverse: 'user'
    });

  Card.has()
    .one('table', {
      model: Table,
      inverse: 'table'
    })
    .one('user', {
      model: User,
      inverse: 'card'
    });

});
