deck.js
=======

api for a deck of cards

Domain Model
---------

Table
- has many Users
  * has Many Cards
- has one Deck
  * has Many Cards
- Deck
  * has Many Cards
  * (needs some validation to make sure there are 52 cards, etc.)