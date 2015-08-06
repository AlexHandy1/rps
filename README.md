Summary
=================

* My implementation of a rock, paper, scissors (and lizard, spock) game developed through TDD using Javascript and Jasmine.

* Based on the specification, I made a number of key implementation decisions:

  * Chose native Javascript/ jQuery to build one page web interface for game and to demonstrate use of one of the company's core languages.  For a project with larger scope, I would have elected to use a front-end framework (e.g. KnockoutJS or Angular (see [Subredditor](https://github.com/AlexHandy1/subredditor)) to allow for quicker development and extended functionality.

  * Modelled domain to ensure designed for flexibility/ extensions:
    * Game Object which when initialized with the rules for a particular game and two separate players processes rounds and the overall result.
    * Separate player objects for each player type (Human, RandomCPU and TacticalCPU). All designed to be fully adaptable to changing game rules.

  * Built Game UI as a separate javascript file to drive interface logic:
    * Designed game to always have 1 human player competing against a differing type of CPU player.
    * The human player has option around which type of CPU player to instantiate and play against by clicking a button >> have to click this to start Game.
    * The human player takes a turn by entering 'Rock', 'Paper', 'Scissors', 'Lizard' or 'Spock' and game processes winner with text display all without reloading page.
    * The human player can clear and restart game by clicking the 'Play Again' button.

  * Demonstrated extendability by implementing the additional rules introduced through adding Lizard and Spock turn options.

  * For the purposes of the exercise, I assumed user knowledge of the system and did not build in error handling into UI. Immediate further improvements would be to build in extended input validation and error handling.

  * Challenges - implementing mocking and stubbing for objects to manage underlying randomness of RandomCPUPlayer in jasmine unit tests proved challenging...learnt that...

* More detail on areas where I would extend the application can be found listed below in 'Further improvements'

![Rock Paper Scissors Lizard Spock](https://github.com/AlexHandy1/rps/blob/master/img/RPS.png)

Use Cases:
-------

```
- [x] As a User,
      So that I can play a basic game of Rock Paper Scissors,
      I want to play one round against a computer player with randomised choices

- [x] As a User,
      So that I can play a longer game of Rock Paper Scissors,
      I want to play a best of three rounds match against a computer with randomised choices

- [x] As a User,
      So that I can play a game against a smarter computer player,
      I want to be able choose a computer component that is tactical e.g. always selects the choice that would have beaten its last choice

- [x] As a User,
      So that I can play a game with extended rules,
      I want to have the range of possible moves expanded e.g. player can choose Rock, Paper, Scissors, Lizard, Spock

```

How to run
----

### Local Installation

Run the below commands in your command line interface to view the static web page and run the test suite.

```
git clone https://github.com/AlexHandy1/rps
cd rps
open index.html
open SpecRunner.html
```

Technologies used
----

* Production - Javascript, jQuery, HTML, CSS (Bootstrap)
* Testing - Jasmine

Further Improvements
----

*  Enhanced set of user validations and error handling e.g. drop-down list for form, hide game selection buttons during game (show again after hit play again), stop players taking turns after one has won

*  Implement feature testing for UI

*  Extend UI - allow human players to play against one another rather than CPU players

