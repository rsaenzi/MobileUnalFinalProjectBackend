// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// Commands for Deploy:
//   $ cd "/Users/rsaenzi/Documents/Files/Projects/Firebase/MobileUnalFinalProjectBackend"
//   $ firebase deploy --only functions
// Note: Always push any change to https://github.com/rsaenzi/MobileUnalFinalProjectBackend.git

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions';

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
const firebase = admin.initializeApp(functions.config().firebase);


/*
Just to test if the backend is responding...
*/
export const ping = functions.https.onRequest((request, response) => {
    response.send("Awesome City Trips firebase project is working!");
});

/*
Endpoint: getCategories

Out:
    status
    categories[]
*/
export const getCategories = functions.https.onRequest((request, response) => {
	console.log('Holaaaaa');
    var categorie = firebase.database().ref('categories');
	categorie.once('value').then(function(snap) {
		response.status(200).json({status:"success",categories: snap.val()});
	});
	//response.send("{\"status\":\"success\",\"categories\":[{\"id\":0,\"name\":\"Business\",\"banner_url\":\"https://travel.state.gov/content/travel/en/us-visas/business/_jcr_content/tsg-rwd-content-page-parsysxxx/slideshow.img.png/1512148994695.png\",\"description\":\"Business: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":1,\"name\":\"Gastronomy\",\"banner_url\":\"https://www.visitdenmark.com/sites/default/files/styles/news_and_article_image/public/vdk_images/Travel-trade/top-tema-gastronomy.png?itok=3AlhLjdw\",\"description\":\"Gastronomy: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":2,\"name\":\"History\",\"banner_url\":\"https://blog.my.com/wp-content/uploads/2016/11/Depositphotos_22942194_m-2015.jpg\",\"description\":\"History: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":3,\"name\":\"Nature\",\"banner_url\":\"http://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp\",\"description\":\"Nature: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":4,\"name\":\"Party\",\"banner_url\":\"http://www.hollandevenementengroep.nl/foto/11902/1000/files/Accent%20Fotos/the_party.jpg\",\"description\":\"Party: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":5,\"name\":\"Study\",\"banner_url\":\"https://www.brainscape.com/blog/wp-content/uploads/2011/11/696dcdd6157d0438eed57eac9b6266b5.jpg\",\"description\":\"Study: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":6,\"name\":\"Surgery\",\"banner_url\":\"https://thenypost.files.wordpress.com/2017/06/170629-young-women-plstic-surgery-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1\",\"description\":\"Surgery: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"}]}");
});

/*
Endpoint: getEventsFromCategory

In:
    categoryId
Out:
    status
    events[]
*/
export const getEventsFromCategory = functions.https.onRequest((request, response) => {
	console.log(request.params["0"]);
	var parametro = String(request.params["0"]);
  if(parametro == "")
    response.status(200).json({status:"failed"});
  else{
  	parametro = parametro.replace("/","");
  	var parametro2 = parseInt(parametro);
  	console.log(parametro);
  	var events = firebase.database().ref('events');
  	events.once('value').then(function(snap) {
  		//response.status(200).json({status:"success",categories: snap.val()});
  		var hola = [];
  		snap.forEach(function (childSnapshot) {
  		var childObject = childSnapshot.val();
  		  if (childObject.category_id == parametro2){
  			  hola.push(childObject);
  		  }
          });
  		response.status(200).json({status:"success",events: hola});
    });
  }
    //response.send("{\"status\":\"success\",\"events\":[{\"id\":0,\"category_id\":0,\"name\":\"Campus Party Colombia\",\"description\":\"Campus Party Colombia: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"icon_url\":\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"gallery_urls\":[\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\"],\"place\":{\"id\":0,\"name\":\"Corferias\",\"coordinates\":{\"longitude\":123.123,\"latitude\":987.987}},\"total_seats\":200,\"available_seats\":150,\"rating\":3,\"date\":\"2018-05-03T09:30:00.000Z\",\"price\":150000,\"organizer\":{\"id\":0,\"name\":\"Telefonica\"}},{\"id\":1,\"category_id\":0,\"name\":\"Alimentarte\",\"description\":\"Alimentarte: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"icon_url\":\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\",\"gallery_urls\":[\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\",\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\",\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\"],\"place\":{\"id\":1,\"name\":\"Parque el Virrey\",\"coordinates\":{\"longitude\":123.123,\"latitude\":987.987}},\"total_seats\":500,\"available_seats\":30,\"rating\":5,\"date\":\"2018-10-05T11:45:00.000Z\",\"price\":25000,\"organizer\":{\"id\":1,\"name\":\"Alimentarte Food Festival SAS\"}}]}");
});

/*
Endpoint: getEvent

In:
    eventId
Out:
    status
    event
*/
/*
export const getEvent = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\",\"event\":[{\"id\":0,\"category_id\":0,\"name\":\"Campus Party Colombia\",\"description\":\"Campus Party Colombia: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"icon_url\":\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"gallery_urls\":[\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\"],\"place\":{\"id\":0,\"name\":\"Corferias\",\"coordinates\":{\"longitude\":123.123,\"latitude\":987.987}},\"total_seats\":200,\"available_seats\":150,\"rating\":3,\"date\":\"2018-05-03T09:30:00.000Z\",\"price\":150000,\"organizer\":{\"id\":0,\"name\":\"Telefonica\"}}]}");
});
*/

export const getEvent = functions.https.onRequest((request, response) => {
    var parametro = String(request.params["0"]);
    parametro = parametro.replace("/","");
    var parametro2 = parseInt(parametro);
    console.log(parametro2);
    var evento = firebase.database().ref('events');
	  evento.once('value').then(function(snap) {
      var salida;
      var succeded = false;
  		snap.forEach(function (childSnapshot) {
  		var childObject = childSnapshot.val();
  		  if (childObject.id == parametro2){
          succeded = true;
          salida = childObject;
  		  }
      });
      if(succeded)
  		  response.status(200).json({status:"success",event: salida});
      else
        response.status(200).json({status:"failed"});
	});
});
/*
Endpoint: getCreditCardsFromUser

In:
    userId
Out:
    status
    creditCards[]
*/
export const getCreditCardsFromUser = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\",\"creditCards\":[{\"id\":0,\"token\":\"8455dsfv5\",\"issuer_icon_url\":\"http://icons-for-free.com/free-icons/png/512/206684.png\",\"first_six_digits\":\"854963\",\"last_four_digits\":\"9874\"},{\"id\":1,\"token\":\"jbaeuUYYgois\",\"issuer_icon_url\":\"http://icons-for-free.com/free-icons/png/512/206684.png\",\"first_six_digits\":\"987456\",\"last_four_digits\":\"7458\"},{\"id\":2,\"token\":\"jbafELIYgAAs\",\"issuer_icon_url\":\"http://icons-for-free.com/free-icons/png/512/206684.png\",\"first_six_digits\":\"887156\",\"last_four_digits\":\"0658\"},{\"id\":3,\"token\":\"fffeuAAYcccs\",\"issuer_icon_url\":\"http://icons-for-free.com/free-icons/png/512/206684.png\",\"first_six_digits\":\"123456\",\"last_four_digits\":\"7008\"},{\"id\":4,\"token\":\"afaeuABCgois\",\"issuer_icon_url\":\"http://icons-for-free.com/free-icons/png/512/206684.png\",\"first_six_digits\":\"444456\",\"last_four_digits\":\"2258\"}]}");
});

/*
Endpoint: buyEvent

In:
    userId
    creditCardId
    eventId

Out:
    status
*/
export const buyEvent = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});

/*
Endpoint: getEventFromLocation

In:
    userCoordinates
    numberOfNearEvents
Out:
    status
    events[]
*/
export const getEventFromLocation = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\",\"events\":[{\"id\":0,\"category_id\":0,\"name\":\"Campus Party Colombia\",\"description\":\"Campus Party Colombia: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"icon_url\":\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"gallery_urls\":[\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\"],\"place\":{\"id\":0,\"name\":\"Corferias\",\"coordinates\":{\"longitude\":123.123,\"latitude\":987.987}},\"total_seats\":200,\"available_seats\":150,\"rating\":3,\"date\":\"2018-05-03T09:30:00.000Z\",\"price\":150000,\"organizer\":{\"id\":0,\"name\":\"Telefonica\"}},{\"id\":1,\"category_id\":0,\"name\":\"Alimentarte\",\"description\":\"Alimentarte: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"icon_url\":\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\",\"gallery_urls\":[\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\",\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\",\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\"],\"place\":{\"id\":1,\"name\":\"Parque el Virrey\",\"coordinates\":{\"longitude\":123.123,\"latitude\":987.987}},\"total_seats\":500,\"available_seats\":30,\"rating\":5,\"date\":\"2018-10-05T11:45:00.000Z\",\"price\":25000,\"organizer\":{\"id\":1,\"name\":\"Alimentarte Food Festival SAS\"}}]}");
});

/*
Endpoint: getEventsBuyedByUser

In:
    userId
Out:
    status
    events[]
*/
export const getEventsBuyedByUser = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\",\"events\":[{\"id\":0,\"category_id\":0,\"name\":\"Campus Party Colombia\",\"description\":\"Campus Party Colombia: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"icon_url\":\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"gallery_urls\":[\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\",\"https://pbs.twimg.com/profile_images/943783830611222528/KiHx6Mh6_400x400.jpg\"],\"place\":{\"id\":0,\"name\":\"Corferias\",\"coordinates\":{\"longitude\":123.123,\"latitude\":987.987}},\"total_seats\":200,\"available_seats\":150,\"rating\":3,\"date\":\"2018-05-03T09:30:00.000Z\",\"price\":150000,\"organizer\":{\"id\":0,\"name\":\"Telefonica\"}},{\"id\":1,\"category_id\":0,\"name\":\"Alimentarte\",\"description\":\"Alimentarte: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"icon_url\":\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\",\"gallery_urls\":[\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\",\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\",\"https://pbs.twimg.com/profile_images/693113926989549569/iPDkmKNF_400x400.png\"],\"place\":{\"id\":1,\"name\":\"Parque el Virrey\",\"coordinates\":{\"longitude\":123.123,\"latitude\":987.987}},\"total_seats\":500,\"available_seats\":30,\"rating\":5,\"date\":\"2018-10-05T11:45:00.000Z\",\"price\":25000,\"organizer\":{\"id\":1,\"name\":\"Alimentarte Food Festival SAS\"}}]}");
});

/*
Endpoint: getUserInfo

In:
    userId
Out:
    status
    user
*/
export const getUserInfo = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});

/*
Endpoint: getUserId

In:
    username (Auth?)
    password (Auth?)
Out:
    status
    userId
*/
export const getUserId = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});
