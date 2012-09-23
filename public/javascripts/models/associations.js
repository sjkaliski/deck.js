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
    .many('cards', {
      collection: Cards,
      inverse: 'user'
    })
    .one('table', {
      model: Table,
      inverse: 'users'
    });

  Card.has()
    .one('user', {
      model: User,
      inverse: 'card'
    })
    .one('table', {
      model: Table,
      inverse: 'table'
    });

});
