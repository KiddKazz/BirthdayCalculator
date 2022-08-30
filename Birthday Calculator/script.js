//INITIALIZE VARIABLES
alert('Happy Birthda- I mean... Welcome to the Birthday Program!');
alert('This program is designed to tell you how much longer you have until your next birthday.');

var theMonths = new Array('January','February','March',
        'April','May','June','July','August','September',
        'October','November','December');
        
var oneDay = 24 * 60 * 60 * 1000; //This variable is just taking the main measurements of a day. So the hours, minutes in an hour, seconds in a minute, and milliseconds in a second.
var attempts = 1;

const endMessage = '<p>Program has been cancelled. If you wish to try again <a href="index.html">click here<a>.';
//PROCESSING
while (attempts < 3){

    //Birth year variable with check
    var birthYear = parseInt(prompt('What year were you born?'));

    if (birthYear > 2022 || birthYear < 1910) {
        attempts++;
        birthYear = parseInt(prompt('Let\'s try that again... please enter when you were born'));
    }
    if (isNaN(birthYear)) {
        birthYear = parseInt(prompt('This program only accepts numbers for years..'));
        attempts++;
        if (isNaN(birthYear)) {
            birthYear = parseInt(prompt('If you wish to cancel the program, click cancel or press enter.'));

            if (isNaN(birthYear)) {
                document.write(endMessage);
                break;
            }
        }
    }

    //Birth month variable 
    var birthMonth = prompt('and the month were you born... (write the name)'); //Will return the user's month in a string
    //This will take the user's month and make sure it's formatted properly to match our month array'
    birthMonth = birthMonth.charAt(0).toUpperCase() + birthMonth.slice(1).toLowerCase();

    //Changes birthMonth from a string to a number based on what index the user's birth month is.
    birthMonth = theMonths.indexOf(birthMonth,0);   

    //Birth month variable check
    if (birthMonth == -1){
        birthMonth = prompt('Please use a proper month');
        //This will take the user's month and make sure it's formatted properly to match our month array'
        birthMonth = birthMonth.charAt(0).toUpperCase() + birthMonth.slice(1).toLowerCase();

        //Changes birthMonth from a string to a number based on what index the user's birth month is.
        birthMonth = theMonths.indexOf(birthMonth,0);  
        
        if (birthMonth == -1) {
            document.write(endMessage);
            break;
        }
    }
    


    //Birth day variable with check
    var birthDay = parseInt(prompt('finally, what day of the month.')); //ASks the user for the day, e.g. 31st or 25th.

    if (birthDay < 0 || birthDay > 31) {
        attempts++;
        birthDay = parseInt(prompt('Please only enter a day between 1-31'));

    }
    if (isNaN(birthDay)) {
        attempts++;
        birthDay = parseInt(prompt('Let\'s try entering the day using numbers only.'));
        if (isNaN(birthDay)) {
            birthDay = parseInt(prompt('Last chance. Please put the date properly.'));

            if (isNaN(birthDay)){
                document.write(endMessage);
                break;
            }
        }
    } else {
        //Creating Date Objects
        var birthDate = new Date(birthYear,birthMonth,birthDay); //The user's birthday. 
        var currentDate = new Date(); //What today's date is.
        var upcomingBDay = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()); //Used to calculate how long till next bday.

        let daysLeft = Math.ceil((upcomingBDay.getTime() - currentDate.getTime()) / (oneDay));
        document.write('<p>You have '+ daysLeft +' days left until your next birthday!</p>');
        document.write('<p>'+upcomingBDay.toDateString()+'</p>');
        break;
    }

}
if (currentDate > upcomingBDay){
    upcomingBDay.setFullYear(currentDate.getFullYear() + 1);
}

