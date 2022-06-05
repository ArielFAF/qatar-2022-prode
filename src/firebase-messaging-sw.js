// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
    projectId: 'qatar-2022-prode',
    appId: '1:636192393901:web:ba4dd22310b5520cdbd424',
    databaseURL: 'https://qatar-2022-prode-default-rtdb.firebaseio.com',
    storageBucket: 'qatar-2022-prode.appspot.com',
    apiKey: 'AIzaSyAXrrUNOdWnMS5G9uhlkxVmOoiXH_9oIQM',
    authDomain: 'qatar-2022-prode.firebaseapp.com',
    messagingSenderId: '636192393901',
    measurementId: 'G-DD5QXCJHEN'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
