# mothership

flatUI, clean, simple, modern & minimalist habit tracker.

Contributors:

    Michaela Guzmická :-)
    Neha Hirve
    Emma Scott-Allen
    Tuva Åkerlund

This was our first group project and we had to create a habit tracker, the rest was up to us. We quickly decided on a retro style theme! The idea of our app was that you would need to log in and confirm that you did the habit every single day for as many days as you chose to do it for, and at the end of the time you would be able to play a Space Invaders game. The more times you logged in and confirmed your habit, the more potential points you could gain when you played the Space Invaders game.

Each day you logged in, you could click the habit and a calendar that counted up to your chosen days would appear. If you hadn't confirmed, you would be able to click on the number that was highlighted, and a Space Invader would appear. This sprite would later count as points towards your final score at the end of the time period.

For every 7 days straight that you logged your habit progress, you'd get a blue alien, that was worth more points. This was to incentivise users to keep up with their habits daily. At the end of the allotted timeframe you would be able to play a full game of Space Invaders with whatever aliens you had confirmed by logging in. The more times you logged in, the more alients you had, the more bonus aliens you had, and the more potential points you could get.

* First we worked on creating a section where you could see your habits that you added, as well as adding and removing them. We hard coded a couple to help visualise the page.
* Then we added the slider option to choose how many days you wanted to do your challenge.
* Next was the storing of the habits, so that you would be able to return to the page and your habits and your progress were saved (this was done with local storage and JSON.)
* I learned about and used the native API's document.createElement which would create a new div on the page when you saved your new habit, as well as the .classList.add() which could be used to create "close" buttons (X in the corner) or add a class to an existing div (such as "hidden" to remove an item visually). Mindblowing!

To be continued....


starfield function based off of this guy -->
https://codepen.io/saransh/pen/BKJun
