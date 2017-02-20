/**
 * Created by wjaron on 16.02.17.
 */

var quotesDB = [
    "Doesn’t expecting the unexpected make the unexpected expected? Submitted by: Dylan 610",
    "Man is the only living being who cuts trees, makes paper, and writes “SAVE TREES” on it. Submitted by: Sujit 563",
    "There are three kinds of people in the world. People who make things happen. People who watch things happen and people who say “What happened?”. Submitted by: smiley35 550",
    "Whoever said that nothing was impossible obviously never tried slamming a revolving door. Submitted by: jenny: 467",
    "Dear optimist, pessimist, and realist, while you guys were arguing about the glass of water, I drank it. Sincerely, the opportunist. Submitted by: Mark Cromo 454",
    "Evening news is where they begin with ‘Good evening’, and then proceed to tell you why it isn’t. Submitted by: Shorty 410",
    "I don’t have an attitude problem, you have a perception problem. Submitted by: Sneaky 398",
    "For Sale: Parachute. Only used once, never opened, small stain. Submitted by: Doreen Deramo 386",
    "I live in my own world but it’s okay. They know me there. Submitted by: Susanne 367",
    "If the grass is greener on the other side, you can bet the water bill is higher. Submitted by: Doreen Deramo 355",
    "A lie will make it around the world before the truth has time to put on it’s shoes. Submitted by: Debra Ramey 344",
    "Whoever uses the phrase “Easy as taking candy from a baby,” has obviously never tried taking candy from a baby. Submitted by: Nicole 335",
    "You do not really understand something unless you can explain it to your grandmother. – Albert Einstein Submitted by: Jake 327",
    "“As I grow older, I pay less attention to what people say…i just watch what they do.” Submitted by: Bertha 305",
    "129% of people exaggerate. Submitted by: Jenny A."
];
var source = "Source : http://www.coolnsmart.com/witty_quotes/";
$("#newquote").click(function () {
    event.preventDefault();
    var htmlString = quotesDB[Math.floor(Math.random()*quotesDB.length)] + '<br>' + source;
    $("#getquote").html(htmlString);
});

