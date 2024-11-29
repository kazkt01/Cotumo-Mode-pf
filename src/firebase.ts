// 初代
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyA_c5qaT1ugja-IE1abfXaNcRLGgFQwh3U",
  apiKey: "AIzaSyA_c5qaT1ugja-IE1abfXaNcRLGgFQwh3U",

  authDomain: "cotumo-beta-var3.firebaseapp.com",
  projectId: "cotumo-beta-var3",
  storageBucket: "cotumo-beta-var3.appspot.com",
  messagingSenderId: "935804275341",
  appId: "1:935804275341:web:838355ca85b4bbb4ca70c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app); // ←databaseと連携

export { db };

// 2代目

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA_c5qaT1ugja-IE1abfXaNcRLGgFQwh3U",
//   authDomain: "cotumo-beta-var3.firebaseapp.com",
//   projectId: "cotumo-beta-var3",
//   storageBucket: "cotumo-beta-var3.firebasestorage.app",
//   messagingSenderId: "935804275341",
//   appId: "1:935804275341:web:a226ebd25187a26fca70c4",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
