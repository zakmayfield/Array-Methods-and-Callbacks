import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function getSomeData(data) {
    let final = data.filter(item => item.Year === 2014 && item.Stage === 'Final')

    let details = {
        hTN: final[0]["Home Team Name"],
        aTN: final[0]["Away Team Name"],
        hTG: final[0]["Home Team Goals"],
        aTG: final[0]["Home Team Goals"],
        winner: final[0]["Win conditions"],
    }

    return details
}

console.log(getSomeData(fifaData))


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let finals = data.filter(item => item.Stage === 'Final')
    return finals
};

console.log(getFinals(fifaData))

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsCB) {
    let years = getFinalsCB(fifaData).map(item => item.Year)
    return years
};

console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinalsCB) {
    let winners = getFinalsCB(fifaData).map(function(item) {
        let homeScore = item["Home Team Goals"] + item["Half-time Home Goals"]
        let awayScore = item["Away Team Goals"] + item["Half-time Away Goals"]

        if(homeScore > awayScore){
            return item["Home Team Name"]
        } else if (awayScore > homeScore) {
            return item["Away Team Name"]
        } else if (homeScore === awayScore){
            return item["Win conditions"].split(' ')[0]
        }
    })

    return winners
};

console.log('GET WINNERS', getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinnersCB, getYearsCB) {
    let winnerStrings = []

    let winnersArr = getWinnersCB(getFinals)
    let years = getYearsCB(getFinals)



    for(let i = 0; i < winnersArr.length; i++){
        winnerStrings.push(`In ${years[i]}, ${winnersArr[i]} won the world cup!`)
    }

    return winnerStrings
};

console.log( getWinnersByYear(getWinners, getYears) );

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let goals = data.map(item => {
        return item["Home Team Goals"] + item["Away Team Goals"] + item["Half-time Home Goals"] + item["Half-time Away Goals"]
    })

    let averageGoals = goals.reduce((acc, cur) => acc + cur);

    return averageGoals / goals.length
};

console.log( getAverageGoals(fifaData) );



/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
