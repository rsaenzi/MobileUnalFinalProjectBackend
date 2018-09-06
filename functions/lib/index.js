"use strict";
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
Object.defineProperty(exports, "__esModule", { value: true });
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! v2");
});
//# sourceMappingURL=index.js.map