1. Module to control display of the game
- Assigning variables to DOM elements
- adding event listeners to the dom elements (push value to array when spot is pressed)
- Change contents of DOM elements depending on array (render function) 
  - prevent player from clicking spot that is already assigned
- function to clear dom element contents when reset game is pressed
- changes display of 'whos-turn' when it is a different player's turn

2. Module representing the board
- array representing the player choices and also the 9 slots on the board
- need a public function to change values on array (needs to let display module interact)
- function to clear array (reset game)

2. Module that controls the flow of the current game and determines if a player has won
- checks for all possible combinations for winning
    - 1, 2, 3
    - 4, 5, 6
    - 7, 8, 9
    - 1, 4, 7
    - 2, 5, 8
    - 3, 6, 9
    - 1, 5, 9
    - 3, 5, 7
- checks for tie (if array is full and none of above combinations are fulfilled)
- changes turns between players

3. Factory function to generate players (2 players)
- Player sign (x or o)
- 


