define(['models/model'], function(Model) {

  var suitMap = {
    'Heart': 'heart',
    'Spade': 'spade',
    'Club': 'club',
    'Diamond': 'diamond'
  };

  var codeMap = {
    'Heart': '&#9829;',
    'Spade': '&#9824;',
    'Club': '&#9827;',
    'Diamond': '&#9830;'
  };

  var Card = Model.extend({

    defaults: {
      'suite': 'Heart',
      'value': '5'
    },

    suit: function() {
      var suit = this.get('suite');
      return suitMap[suit];
    },

    code: function() {
      var suit = this.get('suite');
      return codeMap[suit];
    }

  });

  return Card;

});
