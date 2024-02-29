<h1 align="center">Cosmo Keys</h1>

![Cosmo Keys home page on different screens](documentation/index-screens.PNG)

<h2>

[View the live website here: Cosmo Keys](https://kosamad.github.io/Cosmo-Keys/)

</h2>

This is a typing game designed with visually impaired users in mind. Everything has been created to suit their needs  e.g colour choices, spoken elements and responsive functionality. However, it is also aimed to appeal to sighted users. It is a fun, interactive game with different levels of difficulty to accommodate different levels of skill.

<h2>Contents</h2>

xxxxxxx

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

---


## STRATERGY FOR THE WEBSITE

## User Experience (UX)

Using UX design principles, I outlined the key features a typing game would require and what a visually impaired (VI) user would require to ensure they could use the game.

### The Game's Features

- Clean, concise display pages with easy to find information (big buttons, high contrast etc)
- Compatibility with screen readers
- Simple game play that reads the target letter/words for the user
- Different levels of play

### User Stories

- #### Client Goals

1. To have clear, concice information that is easy to navigate and is accessible on multiple screen sizes and to those using screen readers.

2. To link to the games social media site and improve the visibility of the webwise.

3. To create a game that can be used by VI and sighted users with little differences in functionality. 

- #### First Time User Goals

   1. To play a game that allows a user (sighted or VI) to practise typing and get feedback for correct/incorrect answers. 

   2.  To be able to navigate the page without any difficulties inc using a screen reader or computer magnifyer.

   3. To be able to find the rules of the game and understand game play.

 - #### Frequent/Return User Goals

  1. To be able to alter the level of difficulty that mathces current skill level. 

  2. To be able to quickly navigate to the game play page.

  3. To be able to follow the museum on a chosen social media platform.

  ---

  ## SCOPE

  ### Opportunities Martix

The following opportunity matrix summarises the key features that could be implemented in the game Cosmo Keys. It outlines what was addressed in this roll out (phase 1) and what could be implemented in the future (phase 2).

#### Table 1 Opportunity Summary

|Opportunity                            |Importance|Viability|Score|
|:-------------------------------------:|:--------:|:-------:|:---:|
| Rules                                 | 5        | 5       | 10  |
| Information about the game/purpose    | 3        | 5       | 8   |
| Level selection                       | 5        | 3       | 8   |
| Volume control                        | 1        | 2       | 3   |
| Leaderboard                           | 2        | 3       | 5   |
| Contact form                          | 3        | 4       | 7   |
| Increase social media presence        | 3        | 5       | 8   |
| Level 1-3 play                        | 5        | 3       | 8   |
| Level 4-6 play +                      | 1        | 3       | 4   |
| Ability to pause the game             | 5        | 3       | 8   |


Based on the score, the opportunities were sumarised into their roll out phase. 

|Opportunity                             | Phase for Roll Out|
|:-------------------------------------:|:-----------------:|
| Rules                                 | 1                 |
| Information about the game/purpose    | 1                 |
| Level selection                       | 1                 |
| Increase social media presence        | 1                 |
| Level 1-3 play                        | 1                 |
| Ability to pause the game             | 1                 |
| Contact form                          | 1/2**             |
| Volume control                        | 2                 |
| Leaderboard                           | 2                 |
| Level 4-6 play +                      | 2                 |

** I decided that for roll out 1 an email address could be displayed giving the user the ability to contact the game designers if they wanted to but that a contact form would be delayed until roll out 2. 

---

## STRUCTURE

The game will consist of an introductory page that allows the user to see the rules and about information. This will give context to why the game looks and functions as it does (i.e a platform for VI users to improve their typing accuracy). A button will move the user to level selection which will then take them forwards to the game play area.

As this is a game and not an informative website the pages will not take up the whole screen page, it will look like a game, taking up a position in the center of the users screen. Furthermore, it will have functionality and visuals that are typical of games. 

### Pages

1. Home (index) page

- Large, distinctive buttons.
- About and Instruction buttons pop up JS modal with relevant information. About inc contact information for the page (modals chosen to minimise the use of back buttons for VI users).
- Play button to take the user to level selection.
- Links to social media platforms (as not a real game, will just be to the home pages).

2. Level selection

- Colour relevant buttons which aid VI users to select a level of difficulty without having to read the words. Take the user straight to the game play page.
- Upper left “back” button takes you to the home page

3. Game play 

- A button which starts the game, giving the user the opportunity to look at the page before the  game starts.
- Buttons to pause the game, restart and move back to the level select page. This was chosen over a level-change button to minimise the amount of content a VI user needs to find in the game play area. 
- Rules modal in case a user needs to remind themselves how to play the game.
- A timer area.
- Score counter for correct answers.
- Boxes which display the computer’s challenge and the user's response.

  ---

### Wireframes

The following wireframes outline how the content will be veiwed on different devices. They were created using balsamic.

1. 1 Home page (all devices)

![index.html wireframe](documentation/wireframes/cosmo-keys-index.png)

1. 2 Home page example of how the modal will look

![modal example wireframe](documentation/wireframes/modal-example.png)

2. Level selection page (small screen)

![level.html wireframe](documentation/wireframes/level-sm-sc.png)

The level select page on other devices matches the home page layout.

3. 1 Game play page (small screen)

![game.html small wireframe](documentation/wireframes/play-sm-sc.png)

3. 2 Game play page (large screen)

![game.html large wireframe](documentation/wireframes/play-lg-sc.png)

Each page will be responsive and the user will be able to navigate between pages using the back button. There will be multiple oppertunities for the user to interact with the page and play the game in a way that suits them. 

---

## SURFACE DESIGN

### Theme

I wanted the typing game to be fun for people of all ages. Space is a popular subject and there are lovely images and graphics that can be found to make the page engaging for everyone. Additionally and most importantly for my VI inspired game, space is dark! Which makes using contracting colours easy. They fit into the theme and are best for VI users to differentiate different parts of the screen. 

As a consequence of this subject I named the game "Cosmo Keys". Cosmo links to space and also implies speed, whilst Keys informs that the game is for typing (keys on a keyboard).

### Favicon

A rocket image was found on vecteezy (by endang firmansyah) for and converted into a favicon. 



### Colour Scheme

### Typography

### Imagery

### Features




All page features:


- Buttons/links (and surrounding container) change colour when they are hovered over to a blue colour that is consistent through all the pages. 

- The back button for all pages will be positioned in the same, typical place (top left corner) to improve UX as this is where users expect a back button to be. 

(EXAMPLE PICTURES SHOWING THE HOVER EFFECT)

#### The Home Page

SCREEN SHOT OF HOME SCREEN

The home page captivates the user with a distinctive and clean game-like imagery which has a container displaying the game's name (Cosmo Keys) and its key purpose, "The accessible touch typing game". There are links to the games social media platforms which additionally make the game feel more professional.  
 Below this there are three buttons which allow the user to:
 1. View the rules of the game or the "about” the game info. Both of these display as modals to improve VI usability. The about modal tells the user that the game has been designed for VI users and gives the contact information for players to get in touch.
 2. Move on to play the game, and select the level of play.


#### The Level Selection Page

SCREEN SHOT

The game play for phase 1 roll out has three levels:

- Level 1 - 1 letter play
- Level 2 - 2 letter play
- Level 3 - 3 letter play

To aid VI users these are colour coordinated from green to red so a level can be selected based on colour (easier to see) than having to read the words with a magnifier.

#### The Game Play Page

This page is designed to make viewing it (on any device) easy for VI users. Therefore, whilst still being appealing to sighted users, there are some design elements which may have been modified if this was for sighted users only e.g the size of buttons/boxes are purposefully larger than needed and colour choices are more stark than they might otherwise be.

On small devices, initially the page appears on the small side but this is to allow for the keyboard on a phone to be displayed, whilst all the other game aspects remain visible.
 

IMAGES SHOWING THIS!

There are buttons which allow the user to reload the game (before a game has finished) or re-read the rules. This navigation-like bar at the top DOES NOT toggle to a burger on smaller devices. This was a conscious choice to aid VI users as these menus can be cumbersome (the screen reader reads out every option, every time it is selected).

The level that has been selected is displayed on the page.

During game play:

- To aid VI users the timer, which counts down from 60 to 0, has been designed to change colour as the time reduces, so a user doesn't have to read the numbers to know how long is left.

- Using a web speech API, each letter/word is read to the user. Additionally, at the end of the game the score is announced.

- Following a right or wrong answer a corresponding sound is played to improve UX for all users. I chose not to announce the players typed letter/word to improve how the game runs (even though this would help a user identify how they are going wrong). The score box increments with each correct answer. Additionally, there is a display that announces an answer as "right!" or "wrong!", improving UX for sighted users.

- The start game button turns into the pause button. This is to help VI users find it as often their display/mouse is left hovering over this element during game play.


### Future roll outs

MORE CONTENT

## Credit

### Content

### Media

- All images are sourced from Freepix, with specific credit to:

- The favicon was generated using an image from Vecteezy with specific credit to the content creator Endang Firmansyah.