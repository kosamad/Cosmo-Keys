<h1 align="center">Cosmo Keys</h1>

![Cosmo Keys on different screens](documentation/device_shots/screen-overveiw.png)

<h2>

[View the live website here - Cosmo Keys](https://kosamad.github.io/Cosmo-Keys/)

</h2>


Cosmo keys is a typing game that has been designed for visually impaired users. Everything has been created to suit their needs e.g colour choices, spoken elements and responsive functionality. However, it is also aimed to appeal to sighted users. It is a fun, interactive game with different levels of difficulty to accommodate different levels of skill.

<h2>Contents</h2>

- [STRATEGY FOR THE WEBSITE](#strategy-for-the-website)
  * [WHY A TYPING GAME FOR VISUALLY IMPAIRED USERS?](#why-a-typing-game-for-visually-impaired-users-)
  * [USER EXPERIENCE (UX)](#user-experience--ux-)
    + [The Game's Features](#the-game-s-features)
    + [User Stories](#user-stories)
      - [Client Goals](#client-goals)
      - [First Time User Goals (Visually Impaired)](#first-time-user-goals--visually-impaired-)
      - [Frequent/Return User Goals](#frequent-return-user-goals)
  * [SCOPE](#scope)
    + [Opportunities Matrix](#opportunities-matrix)
      - [Table 1 Opportunity Summary](#table-1-opportunity-summary)
      - [Table 2 Roll Out](#table-2-roll-out)
  * [STRUCTURE](#structure)
    + [Pages](#pages)
- [GAME DESIGN AND ROLL OUT](#game-design-and-roll-out)
  * [WIREFRAMES](#wireframes)
  * [SURFACE DESIGN](#surface-design)
    + [Theme](#theme)
    + [Colour Scheme](#colour-scheme)
    + [Typography](#typography)
    + [Sounds](#sounds)
    + [Features](#features)
      - [The Home Page](#the-home-page)
      - [The Level Selection Page](#the-level-selection-page)
      - [The Game Play Page](#the-game-play-page)
      - [The 404 Error Page](#the-404-error-page)
      - [The 500 Error Page](#the-500-error-page)
    + [ACCESSIBILITY](#accessibility)
  * [BUGS](#bugs)
    + [Solved Bugs](#solved-bugs)
    + [Other Known Bugs](#other-known-bugs)
  * [TESTING](#testing)
  * [TECHNOLOGIES USED](#technologies-used)
    + [Languages](#languages)
    + [Frameworks, Libraries, Programmes and Tools Used](#frameworks--libraries--programmes-and-tools-used)
  * [DEPLOYMENT AND LOCAL DEVELOPMENT](#deployment-and-local-development)
    + [Deployment](#deployment)
    + [Forking and Cloning the Github Repository](#forking-and-cloning-the-github-repository)
  * [CREDITS](#credits)
    + [Content](#content)
    + [Code](#code)
    + [Media](#media)
- [FUTURE ROLL OUTS](#future-roll-outs)
- [ACKNOWLEDGMENTS](#acknowledgments)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

---

# STRATEGY FOR THE WEBSITE

## WHY A TYPING GAME FOR VISUALLY IMPAIRED USERS?

Cosmo keys has been designed following conversations with a visually impaired (VI) individual. They explained how typing (especially on a mobile device) is very difficult, but that there is no opportunity to practise typing as most typing games rely on the user being able to see the letters they are asked to type. A platform that gives them a fun way to practise typing would allow them to gain some muscle memory and learn where their fingers need to be to accurately type each letter. This prompted the development of Cosmo Keys, a typing game for the visually impaired

## USER EXPERIENCE (UX)

Using UX design principles, I outlined the key features a typing game would require and what a VI user would require to ensure they could use the game.

### The Game's Features

- Clean, concise display pages with easy to find information (big buttons, high contrast etc)
- Compatibility with screen readers
- Simple game play that reads the target letter/words for the user
- Different levels of play

### User Stories

- #### Client Goals

  1. To have clear, concise information that is easy to navigate and is accessible on multiple screen sizes and to those using screen readers.

  2. To link to the games social media site and improve the visibility of the webwise.

  3. To create a game that can be used by VI and sighted users with little differences in functionality.

- #### First Time User Goals (Visually Impaired)

   1. I want to play a game to practice my typing.

   2.  I want to be able to navigate the page without any difficulties inc using a screen reader or computer magnifier.

   3. I want to be able to find the rules of the game and understand game play.

 - #### Frequent/Return User Goals

    1. I want to be able to alter the level of difficulty that matches my current skill level.

    2. I want to be able to quickly navigate to the game play page.

  ---

  ## SCOPE

  ### Opportunities Matrix

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


Based on the score, the opportunities were summarised into their roll out phase.

#### Table 2 Roll Out

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

As this is a game and not an informative website the pages will not take up the whole screen page, it will look like a game, taking up a position in the centre of the users screen. Furthermore, it will have functionality and visuals that are typical of games.

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

4. Error pages (404 an 500)

- Large, distinctive buttons.
- Informative
- Links back to home page (index.html)

---

# GAME DESIGN AND ROLL OUT

## WIREFRAMES

The following wireframes outline how the content will be viewed on different devices. They were created using balsamic.

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

Each page will be responsive and the user will be able to navigate between pages using the back button. There will be multiple opportunities for the user to interact with the page and play the game in a way that suits them.

---

## SURFACE DESIGN

### Theme

I wanted the typing game to be fun for people of all ages. Space is a popular subject and there are lovely images and graphics that can be found to make the page engaging for everyone. Additionally and most importantly for my VI inspired game, space is dark! Which makes using contracting colours easy. They fit into the theme and are best for VI users to differentiate different parts of the screen.

As a consequence of this subject I named the game "Cosmo Keys". Cosmo links to space and also implies speed, whilst Keys informs that the game is for typing (keys on a keyboard).

I found my background image on Freepik and used this for all subsequent design elements.

![background image](assets/images/main-bg-sm.jpg)

---

### Colour Scheme

From my background image I selected base, high contrasting colours using ColorZilla (purple #8a38e3, light blue #70caf5, orange/red #f2624a and dark blue #07043C).

![colours used](documentation/screen_shots/colours.png)

This dark blue was used for my overlay on all pages (with transparency) and I created gradient backgrounds (using colourSpace) using the other colours as a starting point to use across my buttons.

![colours used](documentation/screen_shots/orange_button.png)
![colours used](documentation/screen_shots/purple_button.png)
![colours used](documentation/screen_shots/hover-colour.png)

Other colours were selected to complement these e.g the red, orange and green used on the level page and the grey on the game play page.

---

### Typography

The two fonts I have used for Cosmo Keys are from the Google font library. "Audiowide" was used for the title and impact words as it has a very game-like appearance and linked with my space theme.

![audiowide example](documentation/screen_shots/audiowide-font-example.png)

The more informative text was written using Lexend. This was selected after reading the article by google fonts titled ["Introducing accessibility in typography"](https://fonts.google.com/knowledge/readability_and_accessibility/introducing_accessibility_in_typography). It states that Lexend was designed to be easier to read, ensuring each character is distinctive from others.

![lexend example](documentation/screen_shots/lexend-font-example.png)

---

### Sounds

The sounds for the "correct", "wrong" and "game-over" were selected from freesound. They are short, snappy sounds that don't take up too much time as part of the game and have distinctive tones which match a users expectations for right, wrong and the end of a game.

To create the talk-back functionality of the game I used the Web Speech API created by Mozilla.

---

### Features

The website is comprised of a home page, a level select page and a game play page.

All pages are responsive and have:

- A faviocon in the browser tab. This was generated by cropping the background image.

    ![favicon rocket](documentation/screen_shots/favicon-capture.png)

- A title which links back to the home page.

- Buttons/links (and surrounding container) change colour when they are hovered over to a blue colour that is consistent through all the pages.

    ![hover effect ](documentation/screen_shots/hover-effect.png)

- The back button for all pages will be positioned in the same, typical place (top left corner) to improve UX as this is where users expect a back button to be.

#### The Home Page

 ![Home page ](documentation/device_shots/index-screens.png)

The home page captivates the user with a distinctive and clean game-like imagery which has a container displaying the game's name (Cosmo Keys) and its key purpose, "The accessible touch typing game". There are links to the games social media platforms which additionally make the game feel more professional.  

 Below this there are three buttons which allow the user to:

 1. View the rules of the game or the "about” the game info.
 
    Both of these display as modals to improve VI usability. The about modal tells the user that the game has been designed for VI users and gives the contact information for players to get in touch. The rules modal instructs the user how to play the game. For each, the user does not need to find the "x" button and can simply click anywhere on the screen to exit.

      ![Rules modal ](documentation/device_shots/rules_modal.png)

 2. Move on to play the game (play button), and select the level of play.

#### The Level Selection Page

  ![Level page ](documentation/device_shots/level-screens.png)

The game play for phase 1 roll out has three levels:

- Level 1 - 1 letter play
- Level 2 - 2 letter play
- Level 3 - 3 letter play

To aid VI users these are colour coordinated from green to red so a level can be selected based on colour (easier to see) than having to read the words with a magnifier.

#### The Game Play Page

  ![game page ](documentation/device_shots/game-screens.png)

This page is designed to make viewing it (on any device) easy for VI users. Therefore, whilst still being appealing to sighted users, there are some design elements which may have been modified if this was for sighted users only e.g the size of buttons/boxes are purposefully larger than needed and colour choices are more stark than they might otherwise be.

There are buttons which allow the user to reload the game (before a game has finished) or re-read the rules. This navigation-like bar at the top DOES NOT toggle to a burger on smaller devices. This was a conscious choice to aid VI users as these menus can be cumbersome (the screen reader reads out every option, every time it is selected).

The level that has been selected is displayed on the page, coloured to correspond to the level of difficulty.

On small screens a box is added to notify the users that the page has space for their keypad (see [TESTING](TESTING.md#4-real-user-testing) user stories). Additionally, the reload button moves to the bottom of the page to ensure the playing space is maximised and all content is visible. 

During game play:

- To aid VI users the timer, which counts down from 60 to 0, has been designed to change colour as the time reduces, so a user doesn't have to read the numbers to know how long is left. This is done from green to red.

- Using a web speech API, each letter/word is read to the user. The speech utterance is cancelled if a user gets part of a word/letter set wrong. It is also cancelled if (a sighted user) types all the letters quicker than the speech utterance. This speeds up the game and prevents the speech being left behind the sighted user. Additionally, at the end of the game the score is announced.

- Following a right or wrong answer a corresponding sound is played to improve UX for all users. I chose not to announce the players typed letter/word to improve how the game runs (even though this would help a user identify how they are going wrong). The game is NOT case sensitive. This ensures users on a mobile device don't have to adjust their keypad to lowercase letters. The score box increments with each correct answer. Additionally, there is a display that announces an answer as "right!" or "wrong!", improving UX for sighted users.

- The start game button turns into the pause button. This positioning is to help VI users find it as often their display/mouse is left hovering over this element during game play.

#### The 404 Error Page

 ![404 error page](documentation/device_shots/404-screens.png)

The 404 error page displays the Cosmo Keys title, which like on the other pages, acts as a link back to the home (index) page. There is a message on the page that notifies the user there has been a problem (error) navigating to their desired page. The "Go Home" button will redirect the user back to the home page to start again. I chose not to give the user options as this keeps the page simple and ensures a level is selected before game play starts. 

#### The 500 Error Page

![500 error page](documentation/device_shots/500-screens.png)

The 500 error page displays if there is an error calling the API. The Cosmo Keys title links back to the home page. The Error message notifies the user there has been an error trying to retrieve their challenge letters. As above, I have only given the user the option to navigate home with a "Go Home" button. 

---

### ACCESSIBILITY

The accessibility of this game was a huge consideration throughout it's development. In addition to the design features already discussed (colour, contrast, size ets). I also ensured:

* Screen reader compatibility.
* Aria labelling to identify different parts of the page.
* Semantic HTML.

Furthermore I checked the accessibility of my website using Google's [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla?pli=1)

Here are two examples of how pages looked using the yellow/blue and red/green colour blindness filters.

![yellow blue filter](documentation/screen_shots/home-yellow-blue-blindness.png)

![red green filter](documentation/screen_shots/game-red-green-blindness.png)

I also tested the game using [Silktide's](https://chromewebstore.google.com/detail/mpobacholfblmnpnfbiomjkecoojakah) accessibility extension for google chrome. Each page passed all checks for contrast and colour and could be read successfully by a screen reader. Additionally, I got user feedback from a VI player.

---

## BUGS

### Solved Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | Play button on index.html not styling like the rest of the buttons. ![bug 1 button](testing/images/bugs/bug-1-button.png)| I attempted to adjust the padding settings for each screen size but couldn’t line it up perfectly. I solved this bug by putting a span of text either side of the icon which has an opacity of 0 (therefore cannot be seen). Therefore the padding renders to this and keeps the boxes the same for each element on the page.|
| 2 |Level ID in game.html could not be set from level.html using my original code. [Bug 2 level id](testing/images/bugs/bug-2-level-id.png). This successfully logged the level but didn’t transfer this data onto my game.html page (therefore the content wasn’t loaded to the DOM)| After some internet searching, I found [this article](https://codetheweb.blog/javascript-localstorage/) which outlined you can store a variable using local storage which means you can then access and retrieve the variable on a subsequent page. I chose local storage as I want the level id to be retained even if the game is reloaded (without moving back to the level page).|
| 3 | Player initiates a new letter with every letter typed (even if the turn isn't over). |  After going back over the Simon game CI tutorial and some YouTube game examples I concluded I needed to add a boolean variable that set a computer turn to false for when the player could move and true the rest of the time. I also removed the listening capability of the event listener so it could no-longer detect a player's input.|
| 4 | After pausing the game, the focus moved to the beginning of the player answer box (and therefore immediately incurred a wrong result when the player started typing again). | I first tried to use a [focus.point](testing/images/bugs/bug-3-focus.png) on my querySelector using the length within my player answer box to move the cursor to the end. However, this didn’t work. This is because my element in not an input, but a contenteditable. Therefore I had to use the range method as described [here](https://phuoc.ng/collection/html-dom/move-the-cursor-to-the-end-of-a-content-editable-element/) by Phuoc Nguyen|
| 5 | Screen reader content showing | Upon loading each page the screen reader content showed briefly. This was due to Bootstraps sr-only class being applied slower than the rest of the content. By making my own sr-only class the content remains hidden at all times.|
| 6 | On Apple devices and on the browser Firefox my fix to get the letter "a" to sound like "ay" didn't work as the computer was pronouncing it like "i". This was incompatable for a VI user playing on these devices.| I had to try numerous different ways of spelling the sound "ay" to get it to sound ok across browsers. When researching how I could spell it i came across this [YoutTube video](https://www.youtube.com/watch?v=UCE3ZO0Rc0E) that promted me to try "eigh".| 
| 7 |  On Apple devices, level 2 and level 3 play were not saying the computer letters. However, after pausing they worked | I first tried to input the focusAtEnd() features (minicing the pause event) into the player turn function but this didn't work. I then asked chat GTP why a speech() using the API might not work straigt away but work on subsequent rounds. One of the suggestions was to "Introduce a small delay before calling speakLetter to allow the input element to gain focus." This made sense as it would explain why the function worked correctly after the game had been paused. i therefore put a slight time delay for the computer's letter speech which solved the problem.| 
---
---

### Other Known Bugs

* UX could be improved by forcing the keypad on phones to load when the game play page is loaded, automatically. This would replace the box I've added saying "your keypad will be here". I searched multiple slack forums and tried several methods to force a .click() event in javascript after setting the .focus() of the player answer box but none of the methods I tried worked.  

* A user can continue to type into the box when they have a.finished a word or b.entered a wrong answer. To solve this I stopped the player answer box from being "content editable" after a wrong answer (or at the end of the correct answer). The example here shows how the funtion was written:

![prematchcheck bug](testing/images/bugs//bug_prematchcheck.png)

and then returned it when it was the player answer turn. This required a click and refocus to put the cursor back in the box.

![player answer box](testing/images/bugs/bug_playeranswer.png)

This solved the problem for google chrome and android devices. However, this did not work on apple devices.
Furthermore, as a result of this modification the keypad on mobile devices kept hiding and then displaying again which was a poor user experience:

[Video of keypad showing/hiding](testing/images/bugs/keypad_updown.mp4)

I therefore removed this feature and simply turned off the event listener to prevent typed letters being logged. It would improve the UX to prevent a user from typing when they should not be able to whilst retaining the mobile device keypad.  

---

## TESTING

Please see the separate [TESTING.md](TESTING.md) file for testing carried out on Cosmo Keys.

---

## TECHNOLOGIES USED

### Languages

HTML, CSS and Javascript.

---

### Frameworks, Libraries, Programmes and Tools Used

- [Gitpod](https://gitpod.io/workspaces) and [Visual Studio Code Desktop Version](https://visualstudio.microsoft.com/#vscode-section) - to create the site (IDE's).
 
- [Balsamiq](https://balsamiq.com/) - to create wireframes.
 
- [Github](https://github.com/) - to save and store the files for the website.

- [Git](https://git-scm.com/) - for version control, using the Gitpod terminal to commit to Git and Push to GitHub.

- [Bootstrap version 5.3.2](https://getbootstrap.com/) - to input different features of the website including buttons and modals and to assist responsive styling.

- [Font Awesome:](https://fontawesome.com/) - to add icons and improve the UX.

- [Google Fonts](https://fonts.google.com/) - for the fonts used on the website.

- [ColorZilla](https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp) - to pick colours from the background image and get hex codes.
 
- [Google Developer Tools](https://developer.chrome.com/docs/devtools/) - to view responsive styling and troubleshoot/solve issues.

- [Favicon.io](https://favicon.io/) - to create the Cosmo Keys favicon.

- [ColourSpace](https://mycolor.space/) - to create the colour gradients.

- [TinyPNG](https://tinypng.com/) - to compress background image.

- [Am I Responsive?](http://ami.responsivedesign.is/) - to show the website on different devices/screen sizes.

- [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) - to view the website under different accesibiity filters.

- [Silktide Accessibility Checker ](https://chromewebstore.google.com/detail/mpobacholfblmnpnfbiomjkecoojakah)  - to check the website for accessibility and sample the screen reader function.

- [GitHub Wiki Toc generator](https://ecotrust-canada.github.io/markdown-toc/) - to automatically create my contents page in the README.md file.

- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - by Mozilla to generate the talkback features of the game.

- [Datamuse API](https://www.datamuse.com/api/) - to generate words for level 2 and level 3 play.

- [Jest](https://jestjs.io/) - to undertake automatic testing of my JavaScript.

---

## DEPLOYMENT AND LOCAL DEVELOPMENT

### Deployment

The [Cosmo Keys game](https://kosamad.github.io/Cosmo-Keys/index.html) was deployed using GitHub pages using the following steps:

1. Login (or signup) to Github.
2. Navigate to the project repository ( e.g [Cosmo Keys](https://github.com/kosamad/Cosmo-Keys))
3. To deploy the site to Github pages:
    1. Click the settings button at the top of the page.
    2. Select pages in the left hand navigation menu.
    3. Under Build and Deployment, click the "Branch "dropdown menu and change it from "None", to "Main". Then click save.
4. To find the site:
    1. Click on "Deployments", on the right hand side of the repository.
    2. Under the Deployments menu on the left, select "All Environments".
    3. The page can then be selected from the Active deployments section.

### Forking and Cloning the Github Repository

Both forking and cloning the repository follow steps 1 and 2 above.

Then to fork:

1. Click on the "Fork" button at the top right of the page.

To clone:

1. Click on the code button and under the "Local" tab and select how you would like to clone (HTTPS, SSH or GitHub CLI.)
2. Copy the link and use it to create a new workspace in your chosen IDE (code editor).

---

## CREDITS

### Content

Words for level 2 and level 3 play are generated by the [Datamuse API](https://www.datamuse.com/api/).

All other content for the game was written by myself.

---

### Code

In addition to the articles and videos mentioned above.

- My modal code is taken and modified from [Bootstrap](https://getbootstrap.com/docs/5.3/components/modal/#how-it-works). I also used Bootstrap grid systems and other classes that I to make the page responsive.

- To understand how to fetch from the datamuse API I watched the [YouTube](https://www.youtube.com/watch?v=lvvBpPIzalI) video by ByteGrad. I modified this to map data results into an array amd to have the twoLetterWords variable be available outside of the findwords function.

- I used [this video](https://www.youtube.com/watch?v=R-7eQIHRszQ) by Web Dev Simplified  to see how someone might structure the javascript for a typing game. However, I did not directly take any code from this tutorial.
---

### Media

- The only image used on this site was taken from Freepix, with specific credit to vectorpouch (<a href="http://www.freepik.com">Designed by vectorpouch / Freepik</a>)

- All sounds were selected from [Freesound](https://freesound.org/) with specific credit to LittleRainySeasons for the "right" sound, Gronkjaer for the "wrong" sound and fupicat, for the final, game over sound.

---

# FUTURE ROLL OUTS

This game could be developed in several areas in the future. Firstly I'd like to address the features that were outlined for phase 2 in [this table](#table-2-roll-out). This would be to add:

1. A separate area for a contact form.
2. The functionality to control the volume from the game itself, rather than relying on the device's controls.
3. Features that would allow the population of a leaderboard. e.g a username and then a page which would save and display.
4. Additional levels of increasing word  and the option to select symbol practice (something that is particularly difficult for VI users).

I would also address other issues that arose during the development of the game. These are:

1. To investigate and possibly implement an alternative talkback API as Web Speech is a little slow on level 2 play.

    The WebSpeech API does not allow you to trigger multiple Speech’s at once, i.e separate the two-letter array into its individual characters and then speak them “simultaneously”, but in reality use a timeout feature to separate their utterance by a few ms. This is something I would modify for the future. Putting in place a different API that allows for “simultaneous”speech or using audio files for each letter which will allow for parallel play.

2. Alter the use of the modal

    Modals were selected to limit the amount of page navigation a VI user would have to undertake (you can exit the rules modal by clicking anywhere). However, some screen readers recite everything underneath the modal before reading its content. This is a recognised issue for VI users and appears on the most commercial of website's (e.g the BBC). However, as this game is designed specifically for VI users this is a feature that shouldn't occur and therefore development of how the rules/about info is presented would be advantageous and would improve UX.

3. Uppercase/lowercase presentation

    To improve UX I would redesign the game slightly so that the lowercase/uppercase functionality of playing on a phone matches what the computer asks. E.g making typed uppercase letters lowercase on the screen or making the first computer letters uppercase to match how the keypad on a phone loads.

4. Homonyms

   On level 3 play you may get a word like "bye" that could also be spelt "buy". A VI user cannot see the letters and therefore doesn't know which word is being asked. For future roll outs I would ensure that the API array is ammended to remove these homonyms.

Furthermore I would address and fix the [known bugs](#other-known-bugs).

---

# ACKNOWLEDGMENTS

I would like to thank:

- The Code Institute for all course material and their tutors for their aid when I was stuck with Jest.

- My friends and family for testing the game and letting me talk my code at them, helping me figure out how to fix it. This is espeially true for my sister who had to repeatedly test the apple functionality of the game. 

- The City Of Bristol 2023 September cohort, for providing support on slack and specifically Chloe for making me feel less alone in my Jest/javascript struggles.

- My mentor Jubril Akolade for the support, feedback and encouragement that he gave me during this milestone project.

- My tutors at the City of Bristol College for their support when this project was just an idea and their feedback once it was complete.







