// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions';

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! v2");
});