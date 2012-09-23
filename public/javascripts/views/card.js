define([
  'quilt',
  'jst!templates/cards/two',
  'jst!templates/cards/three',
  'jst!templates/cards/four',
  'jst!templates/cards/five',
  'jst!templates/cards/six',
  'jst!templates/cards/seven',
  'jst!templates/cards/eight',
  'jst!templates/cards/nine',
  'jst!templates/cards/ten',
  'jst!templates/cards/jack',
  'jst!templates/cards/queen',
  'jst!templates/cards/king',
  'jst!templates/cards/ace'
], function(Quilt, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, ace) {

  var map = {
    '2': two,
    '3': three,
    '4': four,
    '5': five,
    '6': six,
    '7': seven,
    '8': eight,
    '9': nine,
    '10': ten,
    'J': jack,
    'Q': queen,
    'K': king,
    'A': ace
  };

  var CardView = Quilt.View.extend({

    render: function() {
      Quilt.View.prototype.render.apply(this, arguments);

      value = this.model.get('value');
      cardJst = map[value];
      this.$el.html(cardJst({ model: this.model }));

      if (this.model.get('isVisible')) {
        this.$('[data-card-back]').addClass('hidden');
      } else {
        this.$('[data-card-front]').addClass('hidden');
      }

      this.$el.draggable();

      return this;
    }

  });

  return CardView;

});
