import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAFxBJDoDrY7blUTNUuGYv5LDtVUq11ukE",
    authDomain: "chat-8a600.firebaseapp.com",
    databaseURL: "https://chat-8a600-default-rtdb.firebaseio.com",
    projectId: "chat-8a600",
    storageBucket: "chat-8a600.appspot.com",
    messagingSenderId: "1089971692972",
    appId: "1:1089971692972:web:93cd529793f774a92a8609"
};

export default firebase.initializeApp(firebaseConfig);