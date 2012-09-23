deck.js
=======

api for a deck of cards

Domain Model
-------------

Table
- has many Users
  * username
  * has Many Cards
- has one Deck
  * has Many Cards
- Deck
  * has Many Cards
  * (needs some validation to make sure there are 52 cards, etc.)
- Card
  * value

Routes
----------
- /table/:id -> View of the Table
- /table/create & / -> create a New Table & Invite users
- /table/:id/:username/:secret


