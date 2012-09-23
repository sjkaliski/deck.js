deck.js
=======

api for a deck of cards

Domain Model
-------------

Table
- has many Users
  * username
  * has Many Cards
- Card
  * value

Routes
----------
- /table/:id -> View of the Table
- /table/create & / -> create a New Table & Invite users
- /table/:id/:username/:secret -> User View



