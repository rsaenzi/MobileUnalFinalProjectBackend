// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions';

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

export const ping = functions.https.onRequest((request, response) => {
    response.send("Awesome City Trips firebase project is working!");
});

/*
IN:

OUT:
    Categories []
*/
export const getCategories = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\",\"categories\":[{\"id\":0,\"name\":\"Business\",\"banner_url\":\"https://travel.state.gov/content/travel/en/us-visas/business/_jcr_content/tsg-rwd-content-page-parsysxxx/slideshow.img.png/1512148994695.png\",\"description\":\"Business: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":1,\"name\":\"Gastronomy\",\"banner_url\":\"https://www.visitdenmark.com/sites/default/files/styles/news_and_article_image/public/vdk_images/Travel-trade/top-tema-gastronomy.png?itok=3AlhLjdw\",\"description\":\"Gastronomy: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":2,\"name\":\"History\",\"banner_url\":\"https://blog.my.com/wp-content/uploads/2016/11/Depositphotos_22942194_m-2015.jpg\",\"description\":\"History: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":3,\"name\":\"Nature\",\"banner_url\":\"http://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp\",\"description\":\"Nature: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":4,\"name\":\"Party\",\"banner_url\":\"http://www.hollandevenementengroep.nl/foto/11902/1000/files/Accent%20Fotos/the_party.jpg\",\"description\":\"Party: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":5,\"name\":\"Study\",\"banner_url\":\"https://www.brainscape.com/blog/wp-content/uploads/2011/11/696dcdd6157d0438eed57eac9b6266b5.jpg\",\"description\":\"Study: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},{\"id\":6,\"name\":\"Surgery\",\"banner_url\":\"https://thenypost.files.wordpress.com/2017/06/170629-young-women-plstic-surgery-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1\",\"description\":\"Surgery: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"}]}");
});

/*
IN:
    - CategoryID
OUT:
    - Events []
*/
export const getEventsFromCategory = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});

/*
IN:
    - EventID
OUT:
    - Event
*/
export const getEvent = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});

/*
IN:
    - UserID
OUT:
    - Credit Cards []
*/
export const getCreditCardsFromUser = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});

/*
IN:
    - UserID
    - CreditCardID
    - EventID

OUT:
    - Status {success, error}
*/
export const buyEvent = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});

/*
IN:
    - UserCoordinates
    - NumberOfNearEvents
OUT:
    - Events []
*/
export const getEventFromLocation = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});

/*
IN:
    - UserID
OUT:
    - Events []
*/
export const getEventsBuyedByUser = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});

/*
IN:
    - UserID
OUT:
    - User
*/
export const getUserInfo = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});

/*
IN:
    - Username (Auth?)
    - Password (Auth?)
OUT:
    UserID
*/
export const getUserID = functions.https.onRequest((request, response) => {
    response.send("{\"status\":\"success\"}");
});