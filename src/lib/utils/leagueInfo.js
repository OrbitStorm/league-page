/*   STEP 1   */
export const leagueID = "1129884076942639104"; // your league ID
export const leagueName = "The Courtesy Flush"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
<p><h6>Fingers on the handle, it's time to do The Courtesy Flush!</h6></p>
<p>It is I, Commissioner Brandino, here to lead you through a sensational season of fantasy football. You will refer to me as Commissioner or Sir, and not in the condescending voice you use to depart from a conversation with festering swamp ass. I am your friend (not really) and your best resource (probably not) for the entire season. I can guide you, teach you, and answer any questions you may have. Think of me as Sarah Michelle Gellar to your Selma Blair (Google that). I also rule with a cold, merciless Judge Judian gavel. There will be no trade-raping or collusion under my purview. As always, if you have any questions, please submit them in writing and they will be reviewed at the millennial meeting on August 29th, 2119. Please don't form a union to ostracize me when you start Carson Wentz while he's nursing two sprained ankles from the same game or if you lose because you spent an extra minute on one more wipe before setting your lineup.</p>
<p>As you will come to learn, my fantasy seasons involve cubic tons of trash talk that involving relevant pop culture and sporting tidbits. This year's theme has been dubbed "Ray Rice Couple's Therapy". Picture Ray Rice dragging the lifeless body of his lady friend like Forrest Gump dragging Lieutenant Dan through the Mekong delta — that scene is eerily similar to how I will be using and abusing each and every one of you throughout the season.</p>
<p>Alright everyone, let's have a clean fight. Please continue to bite, swallow, fish hook, or punch below the belt and let's have a super season (for me)!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "983649198526500864",
      "name": "Brandon",
      //"tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pennsylvania", // (optional)
      "bio": "Eat. Sleep. Conquer. Repeat.",
      "photo": "https://sleepercdn.com/uploads/c90ebea163ac3ff355004b9a49efa2cb", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Mikey", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "https://sleepercdn.com/uploads/f332f69bb930623d108d9befe08e21c4.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //  "philosophy": "Your fantasy team's philosophy",
    //  "tradingScale": 10, // 1 - 10
    //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "1129736361621172224",
      "name": "Alisha",
    //  "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pennsylvania", // (optional)
    //  "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/uploads/1aaea68afde350e4673b0c53af2f0bfa.jpg", // square ratio recommended (no larger than 500x500)
    //  "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //  "rival": {
    //    name: "Rival", // Can be anything (usually your rival's name)
    //    link: 6, // manager array number within this array, or null to link back to all managers page
    //    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //  },
    //  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //  "philosophy": "Your fantasy team's philosophy",
    //  "tradingScale": 10, // 1 - 10
    //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "867129649304616960",
      "name": "Mikey",
    //  "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Georgia", // (optional)
    //  "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/uploads/f332f69bb930623d108d9befe08e21c4.jpg", // square ratio recommended (no larger than 500x500)
    //  "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //  "rival": {
    //    name: "Rival", // Can be anything (usually your rival's name)
    //    link: 6, // manager array number within this array, or null to link back to all managers page
    //    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //  },
    //  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //  "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //  "philosophy": "Your fantasy team's philosophy",
    //  "tradingScale": 10, // 1 - 10
    //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "1132642252083515392",
      "name": "Kyle",
    //  "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pennsylvania", // (optional)
    //  "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/uploads/d35a7e91fcfd099932f421423c35b7d3.jpg", // square ratio recommended (no larger than 500x500)
    //  "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //  "rival": {
    //    name: "Rival", // Can be anything (usually your rival's name)
    //    link: 6, // manager array number within this array, or null to link back to all managers page
    //    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //  },
    //  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //  "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //  "philosophy": "Your fantasy team's philosophy",
    //  "tradingScale": 10, // 1 - 10
    //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "1133163894081638400",
      "name": "Elias",
    //  "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York", // (optional)
    //  "bio": "Lorem ipsum...",
      "photo": "/managers/placeholder.jpg", // square ratio recommended (no larger than 500x500)
    //  "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //  "rival": {
    //    name: "Rival", // Can be anything (usually your rival's name)
    //    link: 6, // manager array number within this array, or null to link back to all managers page
    //    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //  },
    //  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //  "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //  "philosophy": "Your fantasy team's philosophy",
    //  "tradingScale": 10, // 1 - 10
    //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "1129736361621172224",
      "name": "Conner",
    //  "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pennsylvania", // (optional)
    //  "bio": "Lorem ipsum...",
      "photo": "/managers/placeholder.jpg", // square ratio recommended (no larger than 500x500)
    //  "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //  "rival": {
    //    name: "Rival", // Can be anything (usually your rival's name)
    //    link: 6, // manager array number within this array, or null to link back to all managers page
    //    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //  },
    //  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //  "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //  "philosophy": "Your fantasy team's philosophy",
    //  "tradingScale": 10, // 1 - 10
    //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "1133143452197347328",
      "name": "Dan",
    //  "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pennsylvania", // (optional)
    //  "bio": "Lorem ipsum...",
      "photo": "/managers/dan.png", // square ratio recommended (no larger than 500x500)
    //  "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //  "rival": {
    //    name: "Rival", // Can be anything (usually your rival's name)
    //    link: 6, // manager array number within this array, or null to link back to all managers page
    //    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //  },
    //  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //  "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //  "philosophy": "Your fantasy team's philosophy",
    //  "tradingScale": 10, // 1 - 10
    //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "1133152876752388096",
      "name": "Joe",
    //  "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pennsylvania", // (optional)
    //  "bio": "Lorem ipsum...",
      "photo": "/managers/placeholder.jpg", // square ratio recommended (no larger than 500x500)
    //  "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //  "rival": {
    //    name: "Rival", // Can be anything (usually your rival's name)
    //    link: 6, // manager array number within this array, or null to link back to all managers page
    //    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //  },
    //  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //  "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //  "philosophy": "Your fantasy team's philosophy",
    //  "tradingScale": 10, // 1 - 10
    //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "1130711431042756608",
      "name": "Jacob",
    //  "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pennsylvania", // (optional)
    //  "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/uploads/0cd29c7affbe0d079a11a8db3835da96.jpg", // square ratio recommended (no larger than 500x500)
    //  "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "tb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //  "rival": {
    //    name: "Rival", // Can be anything (usually your rival's name)
    //    link: 6, // manager array number within this array, or null to link back to all managers page
    //    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //  },
    //  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //  "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //  "philosophy": "Your fantasy team's philosophy",
    //  "tradingScale": 10, // 1 - 10
    //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "1133290013015277568",
      "name": "Chason",
    //  "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pennsylvania", // (optional)
    //  "bio": "Lorem ipsum...",
      "photo": "/managers/placeholder.jpg", // square ratio recommended (no larger than 500x500)
    //  "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ari", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //  "rival": {
    //    name: "Rival", // Can be anything (usually your rival's name)
    //    link: 6, // manager array number within this array, or null to link back to all managers page
    //    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //  },
    //  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //  "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //  "philosophy": "Your fantasy team's philosophy",
    //  "tradingScale": 10, // 1 - 10
    //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
