importScripts("https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.2.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "…",
  authDomain: "libroaudio-d36b5.firebaseapp.com",
  projectId: "libroaudio-d36b5",
  storageBucket: "libroaudio-d36b5.firebasestorage.app",
  messagingSenderId: "1047668815151",
  appId: "1:1047668815151:web:552fa4dd63b2a847845dda"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Notifica in background:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png" // opzionale: un’icona per la notifica
  });
});
