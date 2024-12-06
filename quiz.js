// 1 - Debut / Taylor Swift 14
// 2 - Fearless 26
// 3 - Speak Now 2
// 4 - Red 31
// 5 - 1989 21
// 6 - Reputation 15
// 7 - Lover 19
// 8 - Folklore 17
// 9 - Evermore 17
// 10 - Midnights 23
// 11 - TTPD 32

var done = new Array(numOfSongs); // 230
var songs = {
    "Tim McGraw": "1",
    "Picture To Burn": "1",
    "Teardrops on My Guitar": "1",
    "A Place in This World": "1",
    "Cold As You": "1",
    "The Outside": "1",
    "Tied Together with a Smile": "1",
    "Stay Beautiful": "1",
    "Should've Said No": "1",
    "Mary's Song (Oh My My My)": "1",
    "Our Song": "1",
    "I'm Only Me When I'm With You": "1",
    "Invisible": "1",
    "A Perfectly Good Heart": "1",

    "Fearless": "2",
    "Fifteen": "2",
    "Love Story": "2",
    "Hey Stephen": "2",
    "White Horse": "2",
    "You Belong With Me": "2",
    "Breathe": "2",
    "Tell Me Why": "2",
    "You're Not Sorry": "2",
    "The Way I Loved You": "2",
    "Forever & Always": "2",
    "The Best Day": "2",
    "Change": "2",
    "Jump Then Fall": "2",
    "Untouchable": "2",
    "Come In With The Rain": "2",
    "Superstar": "2",
    "The Other Side of the Door": "2",
    "Today Was a Fairytale": "2",
    "You All Over Me": "2",
    "Mr. Perfectly Fine": "2",
    "We Were Happy": "2",
    "That's When": "2",
    "Don't You": "2",
    "Bye Bye Baby": "2",
    
    "Mine": "3",
    "Sparks Fly": "3",
    "Back To December": "3",
    "Speak Now": "3",
    "Dear John": "3",
    "Mean": "3",
    "The Story of Us": "3",
    "Never Grow Up": "3",
    "Enchanted": "3",
    "Better Than Revenge": "3",
    "Innocent": "3",
    "Haunted": "3",
    "Last Kiss": "3",
    "Long Live": "3",
    "Ours": "3",
    "Superman": "3",
    "Electric Touch": "3",
    "When Emma Falls in Love": "3",
    "I Can See You": "3",
    "Castles Crumbling": "3",
    "Foolish One": "3",
    "Timeless": "3",
    
    "State of Grace": "4",
    "Red": "4",
    "Treacherous": "4",
    "I Knew You Were Trouble": "4",
    "All Too Well": "4",
    "22": "4",
    "I Almost Do": "4",
    "We Are Never Ever Getting Back Together": "4",
    "Stay Stay Stay": "4",
    "The Last Time": "4",
    "Holy Ground": "4",
    "Sad Beautiful Tragic": "4",
    "The Lucky One": "4",
    "Everything Has Changed": "4",
    "Starlight": "4",
    "Begin Again": "4",
    "The Moment I Knew": "4",
    "Come Back...Be Here": "4",
    "Girl at Home": "4",
    "Ronan": "4",
    "Better Man": "4",
    "Nothing New": "4",
    "Babe": "4",
    "Message in A Bottle": "4",
    "I Bet You Think About Me": "4",
    "Forever Winter": "4",
    "Run": "4",
    "The Very First Night": "4",
    "All Too Well (10 minute version)": "4",

    "Welcome to New York": "5",
    "Blank Space": "5",
    "Style": "5",
    "Out of the Woods": "5",
    "All You Had To Do Was Stay": "5",
    "Shake it Off": "5",
    "I Wish You Would": "5",
    "Bad Blood": "5",
    "Wildest Dreams": "5",
    "How You Get The Girl": "5",
    "This Love": "5",
    "I Know Places": "5",
    "Clean": "5",
    "Wonderland": "5",
    "You Are in Love": "5",
    "New Romantics": "5",
    "'Slut!'": "5",
    "Say Don't Go": "5",
    "Now That We Don't Talk": "5",
    "Suburban Legends": "5",
    "Is It Over Now?": "5",

    "Ready for it?": "6",
    "End Game": "6",
    "I Did Something Bad": "6",
    "Don't Blame Me": "6",
    "Delicate": "6",
    "Look What You Made Me Do": "6",
    "So It Goes..": "6",
    "Gorgeous": "6",
    "Getaway Car": "6",
    "King Of My Heart": "6",
    "Dancing With Our Hands Tied": "6",
    "Dress": "6",
    "This Is Why We Can't Have Nice Things": "6",
    "Call It What You Want": "6",
    "New Years Day": "6",

    "I Forgot That You Existed": "7",
    "Cruel Summer": "7",
    "Lover": "7",
    "The Man": "7",
    "The Archer": "7",
    "I Think He Knows": "7",
    "Miss Americana & the Heartbreak Prince": "7",
    "Paper Rings": "7",
    "Cornelia Street": "7",
    "Death By a Thousand Cuts": "7",
    "London Boy": "7",
    "Soon You'll Get Better": "7",
    "False God": "7",
    "You Need To Calm Down": "7",
    "Afterglow": "7",
    "Me!": "7",
    "It's Nice to Have a Friend": "7",
    "Daylight": "7",

    "the 1": "8",
    "cardigan": "8",
    "the last great american dynasty": "8",
    "exile": "8",
    "my tears ricochet": "8",
    "mirrorball": "8",
    "seven": "8",
    "august": "8",
    "this is me trying": "8",
    "illicit affairs": "8",
    "invisible string": "8",
    "mad woman": "8",
    "epiphany": "8",
    "betty": "8",
    "peace": "8",
    "hoax": "8",
    "the lakes": "8",

    "willow": "9",
    "champagne problems": "9",
    "gold rush": "9",
    "'tis the damn season": "9",
    "tolerate it": "9",
    "no body no crime": "9",
    "happiness": "9",
    "dorothea": "9",
    "coney island": "9",
    "ivy": "9",
    "cowboy like me": "9",
    "long story short": "9",
    "marjorie": "9",
    "closure": "9",
    "evermore": "9",
    "right where you left me": "9",
    "it's time to go": "9",

    "Lavender Haze": "10",
    "Maroon": "10",
    "Anti-Hero": "10",
    "Snow on the Beach": "10",
    "You're on Your Own, Kid": "10",
    "Midnight Rain": "10",
    "Question...?": "10",
    "Vigilante Shit": "10",
    "Bejeweled": "10",
    "Labyrinth": "10",
    "Karma": "10",
    "Sweet Nothing": "10",
    "Mastermind":"10",
    "The Great War": "10",
    "Bigger Than The Whole Sky":"10",
    "Paris":"10",
    "High Infidelity":"10",
    "Glitch":"10",
    "Would've Could've Should've":"10",
    "Dear Reader":"10",
    "Hits Different":"10",

    "Fortnight":"11",
    "The Tortured Poets Department":"11",
    "My Boy Only Breaks His Favorite Toys":"11",
    "Down Bad":"11",
    "So Long London":"11",
    "But Daddy I Love Him":"11",
    "Fresh Out The Slammer":"11",
    "Florida!!!":"11",
    "Guilty as Sin?":"11",
    "Who's Afraid of Little Old Me?":"11",
    "I Can Fix Him (No Really I Can)":"11",
    "loml":"11",
    "I Can Do It With a Broken Heart":"11",
    "The Smallest Man Who Ever Lived":"11",
    "The Alchemy":"11",
    "Clara Bow":"11",
    "The Black Dog":"11",
    "imgonnagetyouback":"11",
    "The Albatross":"11",
    "Chloe or Sam or Sophia or Marcus":"11",
    "How Did It End?":"11",
    "So High School":"11",
    "I Hate It Here":"11",
    "thanK you alMeed":"11",
    "I Look in People's Windows":"11",
    "The Prophecy":"11",
    "Cassandra":"11",
    "Peter":"11",
    "The Bolter":"11",
    "Robin":"11",
    "The Manuscript":"11"
};

var songIndexed = [
    "Tim McGraw",
    "Picture To Burn",
    "Teardrops on My Guitar",
    "A Place in This World",
    "Cold As You",
    "The Outside",
    "Tied Together with a Smile",
    "Stay Beautiful",
    "Should've Said No",
    "Mary's Song (Oh My My My)",
    "Our Song",
    "I'm Only Me When I'm With You",
    "Invisible",
    "A Perfectly Good Heart",
    "Fearless",
    "Fifteen",
    "Love Story",
    "Hey Stephen",
    "White Horse",
    "You Belong With Me",
    "Breathe",
    "Tell Me Why",
    "You're Not Sorry",
    "The Way I Loved You",
    "Forever & Always",
    "The Best Day",
    "Change",
    "Jump Then Fall",
    "Untouchable",
    "Come In With The Rain",
    "Superstar",
    "The Other Side of the Door",
    "Today Was a Fairytale",
    "You All Over Me",
    "Mr. Perfectly Fine",
    "We Were Happy",
    "That's When",
    "Don't You",
    "Bye Bye Baby",
    "Mine",
    "Sparks Fly",
    "Back To December",
    "Speak Now",
    "Dear John",
    "Mean",
    "The Story of Us",
    "Never Grow Up",
    "Enchanted",
    "Better Than Revenge",
    "Innocent",
    "Haunted",
    "Last Kiss",
    "Long Live",
    "Ours",
    "Superman",
    "Electric Touch",
    "When Emma Falls in Love",
    "I Can See You",
    "Castles Crumbling",
    "Foolish One",
    "Timeless",
    "State of Grace",
    "Red",
    "Treacherous",
    "I Knew You Were Trouble",
    "All Too Well",
    "22",
    "I Almost Do",
    "We Are Never Ever Getting Back Together",
    "Stay Stay Stay",
    "The Last Time",
    "Holy Ground",
    "Sad Beautiful Tragic",
    "The Lucky One",
    "Everything Has Changed",
    "Starlight",
    "Begin Again",
    "The Moment I Knew",
    "Come Back...Be Here",
    "Girl at Home",
    "Ronan",
    "Better Man",
    "Nothing New",
    "Babe",
    "Message in A Bottle",
    "I Bet You Think About Me",
    "Forever Winter",
    "Run",
    "The Very First Night",
    "All Too Well (10 minute version)",
    "Welcome to New York",
    "Blank Space",
    "Style",
    "Out of the Woods",
    "All You Had To Do Was Stay",
    "Shake it Off",
    "I Wish You Would",
    "Bad Blood",
    "Wildest Dreams",
    "How You Get The Girl",
    "This Love",
    "I Know Places",
    "Clean",
    "Wonderland",
    "You Are in Love",
    "New Romantics",
    "'Slut!'",
    "Say Don't Go",
    "Now That We Don't Talk",
    "Suburban Legends",
    "Is It Over Now?",
    "Ready for it?",
    "End Game",
    "I Did Something Bad",
    "Don't Blame Me",
    "Delicate",
    "Look What You Made Me Do",
    "So It Goes..",
    "Gorgeous",
    "Getaway Car",
    "King Of My Heart",
    "Dancing With Our Hands Tied",
    "Dress",
    "This Is Why We Can't Have Nice Things",
    "Call It What You Want",
    "New Years Day",
    "I Forgot That You Existed",
    "Cruel Summer",
    "Lover",
    "The Man",
    "The Archer",
    "I Think He Knows",
    "Miss Americana & the Heartbreak Prince",
    "Paper Rings",
    "Cornelia Street",
    "Death By a Thousand Cuts",
    "London Boy",
    "Soon You'll Get Better",
    "False God",
    "You Need To Calm Down",
    "Afterglow",
    "Me!",
    "It's Nice to Have a Friend",
    "Daylight",
    "the 1",
    "cardigan",
    "the last great american dynasty",
    "exile",
    "my tears ricochet",
    "mirrorball",
    "seven",
    "august",
    "this is me trying",
    "illicit affairs",
    "invisible string",
    "mad woman",
    "epiphany",
    "betty",
    "peace",
    "hoax",
    "the lakes",
    "willow",
    "champagne problems",
    "gold rush",
    "'tis the damn season",
    "tolerate it",
    "no body no crime",
    "happiness",
    "dorothea",
    "coney island",
    "ivy",
    "cowboy like me",
    "long story short",
    "marjorie",
    "closure",
    "evermore",
    "right where you left me",
    "it's time to go",
    "Lavender Haze",
    "Maroon",
    "Anti-Hero",
    "Snow on the Beach",
    "You're on Your Own, Kid",
    "Midnight Rain",
    "Question...?",
    "Vigilante Shit",
    "Bejeweled",
    "Labyrinth",
    "Karma",
    "Sweet Nothing",
    "Mastermind",
    "The Great War",
    "Bigger Than The Whole Sky",
    "Paris",
    "High Infidelity",
    "Glitch",
    "Would've Could've Should've",
    "Dear Reader",
    "Hits Different",
    "Fortnight",
    "The Tortured Poets Department",
    "My Boy Only Breaks His Favorite Toys",
    "Down Bad",
    "So Long London",
    "But Daddy I Love Him",
    "Fresh Out The Slammer",
    "Florida!!!",
    "Guilty as Sin?",
    "Who's Afraid of Little Old Me?",
    "I Can Fix Him (No Really I Can)",
    "loml",
    "I Can Do It With a Broken Heart",
    "The Smallest Man Who Ever Lived",
    "The Alchemy",
    "Clara Bow",
    "The Black Dog",
    "imgonnagetyouback",
    "The Albatross",
    "Chloe or Sam or Sophia or Marcus",
    "How Did It End?",
    "So High School",
    "I Hate It Here",
    "thanK you alMeed",
    "I Look in People's Windows",
    "The Prophecy",
    "Cassandra",
    "Peter",
    "The Bolter",
    "Robin",
    "The Manuscript"
];
var div = document.getElementById('song');
var current = 0;
var num;
var randomNum;
var correct = 0;
var correctTotal = 0;
var log = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var total = 0;
var numOfSongs = songIndexed.length;

function Start(){
    reset();
    setTable();
    num = 20;
    newQuestion();
}

function check(x){
    if (x == songs[songIndexed[randomNum]] && current <= num && correctTotal < numOfSongs) {
        correct++;
        correctTotal++;
        done[randomNum] = -1;
        document.getElementById('results').innerHTML += current + ". "+ "<span class='right'>Correct: </span> The song '" + songIndexed[randomNum] + "' belongs to the album <em>" + albumName(songs[songIndexed[randomNum]])+" </em> <br>";
        update(songs[songIndexed[randomNum]], 'R');
        setTable();
        document.getElementById('totalRight').innerHTML = correctTotal + "/230";
        document.getElementById('totalPercentage').innerHTML = Math.round((correctTotal/numOfSongs)*100) + " %";
        document.getElementById('progress').innerHTML =  total + " questions completed!";
        if (correctTotal == numOfSongs) {
            alert("You have completed the game...");
            current = 1000;
        }
    } else if (current <= num) {
        document.getElementById('results').innerHTML += current + ". "+ "<span class='wrong'>Incorrect: </span> The song '" + songIndexed[randomNum] + "' belongs to the album <em>" + albumName(songs[songIndexed[randomNum]])+" </em> <br>";
        update(songs[songIndexed[randomNum]], 'W');
        setTable();
        document.getElementById('progress').innerHTML = total + " questions completed!";
    }
    if (current < num) {
        newQuestion();
    } else if (current == num) {
        var percent = (correct / num) * 100;
        document.getElementById('results').innerHTML += "<span class='bold'> <br> Your score was " + correct + "/" + num + "...that is a "+ Math.round(percent)+ "% </span>";
        div.innerHTML = "";
        current++;
    } 
}

function newQuestion(){
    randomNum = Math.floor(Math.random()*numOfSongs);
    if (done[randomNum] == -1) {
        newQuestion();
    } else {
        total++;
        current++;
    }
    var key = songIndexed[randomNum];
    div.innerHTML = current + ". "+key;
    // done[randomNum] = -1;
}

function reset(){
    current = 0;
    var num;
    var randomNum;  
    correct = 0;
    document.getElementById('results').innerHTML = "";
}

function resetProgress(){
    done = new Array(numOfSongs);
    log = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    total = 0;
    correctTotal = 0;
    div.innerHTML =" ";
    document.getElementById('results').innerHTML = "";
    document.getElementById('progress').innerHTML = "0 questions completed!";
    document.getElementById('totalRight').innerHTML = correctTotal + "/230";
    document.getElementById('totalPercentage').innerHTML = Math.round((correctTotal/numOfSongs)*100) + " %";
    setTable();
}

function albumName(x){
    if (x == 1) {
        return "Debut";
    } else if (x == 2) {
        return "Fearless";
    } else if (x == 3) {
        return "Speak Now";
    } else if (x == 4) {
        return "Red";
    } else if (x == 5) {
        return "1989";
    } else if (x == 6) {
        return "Reputation";
    } else if (x == 7) {
        return "Lover";
    } else if (x == 8) {
        return "Folklore";
    } else if (x == 9) {
        return "Evermore";
    } else if (x == 10) {
        return "Midnights";
    } else if (x == 11) {
        return "TTPD";
    } else {
        return "INVALID";
    }
}

function setTable(){
    document.getElementById('debutR').innerHTML = log[0];
    document.getElementById('debutW').innerHTML = log[1];
    document.getElementById('fearlessR').innerHTML = log[2];
    document.getElementById('fearlessW').innerHTML = log[3];
    document.getElementById('speaknowR').innerHTML = log[4];
    document.getElementById('speaknowW').innerHTML = log[5];
    document.getElementById('redR').innerHTML = log[6];
    document.getElementById('redW').innerHTML = log[7];
    document.getElementById('x1989R').innerHTML = log[8];
    document.getElementById('x1989W').innerHTML = log[9];
    document.getElementById('reputationR').innerHTML = log[10];
    document.getElementById('reputationW').innerHTML = log[11];
    document.getElementById('loverR').innerHTML = log[12];
    document.getElementById('loverW').innerHTML = log[13];
    document.getElementById('folkloreR').innerHTML = log[14];
    document.getElementById('folkloreW').innerHTML = log[15];
    document.getElementById('evermoreR').innerHTML = log[16];
    document.getElementById('evermoreW').innerHTML = log[17];
    document.getElementById('midnightsR').innerHTML = log[18];
    document.getElementById('midnightsW').innerHTML = log[19];
    document.getElementById('TTPDR').innerHTML = log[20];
    document.getElementById('TTPDW').innerHTML = log[21];
}

function update(rand, x) {
    if (albumName(rand) == "Debut" && x == "R") {
        log[0] +=1;
    } else if (albumName(rand) == "Debut" && x == "W") {
        log[1] += 1;
    } else if (albumName(rand) == "Fearless" && x == "R") {
        log[2] += 1;
    } else if (albumName(rand) == "Fearless" && x == "W") {
        log[3] += 1;
    } else if (albumName(rand) == "Speak Now" && x == "R") {
        log[4] += 1;
    } else if (albumName(rand) == "Speak Now" && x == "W") {
        log[5] += 1;
    } else if (albumName(rand) == "Red" && x == "R") {
        log[6] += 1;
    } else if (albumName(rand) == "Red" && x == "W") {
        log[7] += 1;
    } else if (albumName(rand) == "1989" && x == "R") {
        log[8] += 1;
    } else if (albumName(rand) == "1989" && x == "W") {
        log[9] += 1;
    } else if (albumName(rand) == "Reputation" && x == "R") {
        log[10] += 1;
    } else if (albumName(rand) == "Reputation" && x == "W") {
        log[11] += 1;
    } else if (albumName(rand) == "Lover" && x == "R") {
        log[12] += 1;
    } else if (albumName(rand) == "Lover" && x == "W") {
        log[13] += 1;
    } else if (albumName(rand) == "Folklore" && x == "R") {
        log[14] += 1;
    } else if (albumName(rand) == "Folklore" && x == "W") {
        log[15] += 1;
    } else if (albumName(rand) == "Evermore" && x == "R") {
        log[16] += 1;
    } else if (albumName(rand) == "Evermore" && x == "W") {
        log[17] += 1;
    } else if (albumName(rand) == "Midnights" && x == "R") {
        log[18] += 1;
    } else if (albumName(rand) == "Midnights" && x == "W") {
        log[19] += 1;
    } else if (albumName(rand) == "TTPD" && x == "R") {
        log[20] += 1;
    } else if (albumName(rand) == "TTPD" && x == "W") {
        log[21] += 1;
    }

}