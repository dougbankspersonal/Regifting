# Regifting

# Overview

Through a series of Christmas parties with the same group of friends, try to complete the perfect shelf of knick-knacks.

# Basic Concepts

## Objective

Each round players may add Gifts to their **Haul**.

A Gift has 3 properties:

- Item: Teddy, Mug, Candle, or Bath Salts.
- Color: Red, Green, Blue, or White.
- Sentiment: Love, Peace, Home, or Wine.

The object of the game is to create a "Perfect Set" of 4 Gifts:

- Gifts are "From" at least 3 different players.
- For each of "Item", "Color" and "Sentiment", the values are either all the same or all different.

e.g.

- Red "Love" Teddy from Red Player
- Red "Peace" Teddy from Green Player
- Red "Wine" Teddy from Blue Player
- Red "Home" Teddy from Green Player

Is a perfect set:

- The Colors and Items are all the same
- The Sentiments are all different
- Gifts are from at least 3 different players.

## Concepts/Areas

### Pieces

- **Gift**: A card with an Item, Color, and Sentiment, **OR** a Fruitcake.
- **Package**: A container where one can add a Gift (hidden), a "To" player token (public) and a "From" player token (may be public or hidden, depends on the Package).
- **Player Token**: a Die that can be set to indicate any one Player.

### Per Player

- **Workspace**: Private. A container where gifts are assembled to be given to other players.

- **Gift Closet**: Private. Holds Gifts available to be given out in the next round

- **Queue**: Public. Holds Packages in the order they will be opened.

- **Haul**: Public. The set of Gifts, paired with "From" player tokens, a player has acquired through the course of a game. A Gift in the Haul may be Public (face up) or Private (face down, only the owning player can look at it).

### Shared Spaces

- **Santa's Bag**: A "bag" for collecting Packages being given this round.

- **Package Pile**: A central location where all the available Packages are placed for players to claim.

# Setup

## Cards setup.

Separate the Fruitcake cards from other Gift cards.

Shuffle the non-Fruitcake Gift cards.

Place 3 Fruitcake cards facedown in a stack: add Gift cards until the stack totals (4 \* num players) cards.

Deal 4 cards from this stack to each player: these cards go in the Gift Closet.

Place the remaining Gift cards in a central space; this forms the Gift Draw Pile.

## Player setup

Each player:

- Takes a stack of 3 Package containers.
- Takes 7 Player Tokens.
- Gives themself a Private Gift:
  - Draws and looks at 1 card from the Gift Draw Pile.
  - Places it face down in their **Haul**
  - Marks it with their own player token.

## Select initial player

Select a start player: give them the Start Player Meeple.

# Gameplay

The game is played in a series of rounds.

Each round has the following phases, in order:

- Create Packages
- Collect Packages
- Distribute Packages
- Open Packages
- Reset

## Create Packages

Each player must package 3 of the 4 items in their Gift Closet to give to other players.

All Fruitcakes in the Gift Closet must be packaged before any other Gifts.

To Package a Gift:

- Place the Gift facedown in one of the Packages in your Workspace.
- Place a player token faceup on the "To" space:
  - You may give to any player other than yourself.
  - You may give multiple gifts to the same player if you wish.
- Place your own player Token in the "From" space. Depending on the nature of the Package, it may be visible or invisible (some packages hide who they are from).

## Collect Packages

Starting with the starting player and proceeding clockwise, each player places the Packages from their Workspace into Santa's Bag.

The starting player then:

- Shuffles the Packages (in the bag)
- Removes them and spreads them in a grid so they are all visible in the **Package Pile**.

## Distribute Packages

Starting with the Starting player and proceeding clockwise each player selects a Package from the Pile and adds it to **any** open space in their Queue.

- If the Package Pile contains any Packages "To" the active player, they must select one of those Packages.
- Otherwise they may select any Package, even if it is "To" another player.

## Open Packages

All players start "In".

Starting with the Starting Player and proceeding clockwise, each "In" player may either Open or Quit.

- Open: _Only available if there are unopened Packages in Queue_. Flip the Gift card and show the "From" token if necessary. Gift and token are left in place in the queue. Player is still in.
- Quit: Move the last-opened Gift card in the Queue, along with the "From" token, to Haul. The player is now "Out" and cannot Open any more Packages this round.

### Special Cases

- If a player Opens a Fruitcake:
  - They are now "Out".
  - They do not add any Gifts to their Haul this round.
  - They may take a "Secret" token.

- If a player has a "Secret" Token:
  - They may spend it at the beginning of an Open Packages phase.
  - When opening a Gift, they may look at it in secret. If it is not a Fruitcake, they may keep the card facedown in the Queue and if/when it is moved to the Haul.

## Reset

Each player:

- Move "To" and "From" tokens left in queue to personal token supply: take more tokens until they have 6.
- Move any "Gifts" from opened and unopened Packages in the queue into their Gift Closet (this includes any Fruitcakes opened).
- Place Pakcages from queue into Workspace.
- Draw Gifts to refill Closet to 4 cards, if needed.
- Pass Starting Player clockwise.

# Game End

A player wins if, at the end of a round, they can assemble a "Perfect Set" from the gifts in their Haul (including Secret gifts).

A perfect set is 4 gift where:

- Each property (Item, Color, and Sentiment) is either "all same" or "all different"
- Gifts are "From" at least 3 different players.

If more than one player has a perfect set, resolve in order:

- Player with **fewest** gifts in Haul.
- Player with **most** gifts-from-them in other player's Haul.
