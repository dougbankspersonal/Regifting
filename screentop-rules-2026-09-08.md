# Regifting

# Overview

Through a series of Christmas parties with the same group of friends, try to complete the perfect shelf of knick-knacks.

# Basic Concepts

## Objective

Each round players will get to add one Gift to their **Haul** of received Gifts.

A Gift 3 properties:

- Item: Teddy, Mug, Candle, or Bath Salts.
- Color: Red, Green, Blue, or White.
- Sentiment: Love, Peace, Home, or Wine.

The object of the game is to create a "Perfect Set" of 4 Gifts:

- Each gift is from a different player.
- For each of "Item", "Color" and "Sentiment", the values are either all the same or all different.

e.g.

- Red "Love" Teddy
- Red "Peace" Teddy
- Red "Wine" Teddy
- Red "Home" Teddy
  Is a perfect set: the Colors and Items are all the same, and the Sentiments are all different.

## Concepts/Areas

### Pieces

- **Gift**: A card with an Item, Color, and Sentiment, **OR** a Fruitcake.
- **Package**: A container where one can add a Gift (hidden), a "To" player token (public) and a "From" player token (may be public or hidden, depends on the Package).
- **Player Token**: a Die that can be set to indicate any one Player.

### Per Player

- **Workspace**: Private. A container where gifts are assembled to be given to other players. This area is private: other players cannot see anything going on in there.

- **Gift Closet**: Private (a subcontainer of the Workspace). Holds Gifts available to be given out in the next round

- **Haul**: Public. The set of Gifts, paired with "From" player tokens, a player has acquired through the course of a game. A Gift in the Haul may be Public (face up) or Private (face down, only the owning player can look at it).

### Shared Spaces

- **Santa's Bag**: A "bag" for collecting Packages being given this round.

- **Package Pile**: A central location where all the available Packages are placed for players to claim.

# Setup

## Cards setup.

Separate the Fruitcake cards from other Gift cards.

Shuffle the non-Fruitcake Gift cards.

Place 3 Fruitcake cards facedown in a stack: add Gift cards until the stack totals (5 \* num players) cards.

Divide this stack evenly among the players (each player gets 5 gifts from this stack). This forms their initial "Gift Closet".

Place the remaining Gift cards in a central space; this forms the Gift Draw Pile.

Playes may look at the cards in their Gift Closet, but should keep them hidden from other players.

## Player setup

Each player:

- Takes a stack of 4 Package containers.
- Takes 8 Player Tokens.
- Gives themself a Private Gift:
  - Draws 1 card from the Gift Draw Pile.
  - Looks at the card
  - Places it face down in their **Haul**
  - Marks it with their own player token.

## Select initial player

Select a start player: give them the Start Player Meeple.

# Gameplay

The game is played in a series of rounds.

Each round has the following phases, in order:

- Create Packages
- Collect and Distribute Gifts
- Recycle
- Resupply
- Pass the Start Player

## Create Packages

Each player must package 4 of the 5 items in their Gift Closet to give to other players.

All Fruitcakes in the Gift Closet must be packaged before any other Gift.

To Package a Gift:

- Take the top Package from your Stack.
- Place the Gift facedown on the Gift space.
- Place a player token faceup on the "To" space:
  - You may give to any player other than yourself.
  - You may not give more than one Gift to any one player.
- Place your own player Token in the "From" space. Depending on the nature of the Package, it may be visible or invisible (some packages hide who they are from).

## Collect and Distribute Gifts.

### Collect Gift.

Starting with the starting player and proceeding clockwise, each player places their 4 Packages in Santa's Bag.

The starting player then:

- Shuffles the Packages (in the bag)
- Removes them and spreads them in a grid so they are all visible. This is the "Package Pile".

### Distribute Gifts

All players start "In".

Starting with the Starting player and proceeding Clockwise, each "In" player may opt to Open or Pass. This continues until all presents are gone or all players have passed.

#### Open

- A player selects any Package from the Package Pile in the middle that is "To" them. - If there are no Package "To" them they may select any Package they want.

They remove any "To" token on the Package: return to central supply.

They flip the Gift and, if necessary, expose the "From" token.

If it is a Fruitcake:

- The player collects a "Secret" token.
- The player does not get to keep any Gifts this round: proceed immediately to Cleanup.
- The player has now "Passed".

If it is not a Fruitcake:

- The player adds the Package (with opened Gift and exposed "From" player token) to an ordered queue of Packages they opened this round.

#### Pass

- The player is now "Out".
- They keep the Gift from the latest Package in their Queue: move the Gift and the "From" token to their Haul.

#### Notes on Distribution

- If all Packages have been taken from the middle, any players who are still "In" must "Keep".
- If a player has a "Secret" token, they may spend it to make one "Open" action **Private**:
  - They opent the Package in their Workspace so that no one can see what it is.
  - If it is a Fruitcake, they show the card and proceed with normal Fruitcake rules.
  - Otherwise:
    - When added to the queue, it remains facedown.
    - If added to the Haul, it remains facedown.

## Recycle

Each player:

- Remove any "From" tokens from unopened Packages in the queue: return to central supply.
- Remove any "Gifts" from from unopened Packages in the queue: these go into the player's Gift Closet.
- If they opened a Fruitcake, move it to their Gift Closet.
- Shuffle any "Packages" from their queue into their stack of Packages in their workspace.

Any Packages remaining in the Package Pile:

- Remove To and From tokens, return to central supply.
- Remove any Gifts, shuffling back into the main Gift deck.
- Place empty Packages back into central Package supply.

## Resupply

Each player resets their Workspace:

- Draw from the Gift pile into their Gift Closet until they have 5 Gifts in the closet.
- Draw 4 Packages from central supply: stack and shuffle.
- Take 8 player tokens.

# Game End

A player wins if, at the end of a round, they can assemble a "Perfect Set" from the gifts in their Haul (including Private gifts).

If more than one player has a perfect set, resolve in order:

- Player with **fewest** gifts in Haul.
- Player with **most** gifts-from-them in other player's Haul.
