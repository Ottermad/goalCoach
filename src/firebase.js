import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDorvDnsmvQn73DdIFQe0uoPMKh3K-cjV0",
  authDomain: "goalcoach-adecf.firebaseapp.com",
  databaseURL: "https://goalcoach-adecf.firebaseio.com",
  storageBucket: "goalcoach-adecf.appspot.com",
  messagingSenderId: "605711411628"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
