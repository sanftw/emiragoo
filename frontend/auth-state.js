// auth-state.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCBO78SyxGP9AvgAKAiQocJBUDg5FtSqHo",
  authDomain: "emirago-b09aa.firebaseapp.com",
  projectId: "emirago-b09aa",
  storageBucket: "emirago-b09aa.firebasestorage.app",
  messagingSenderId: "298423462008",
  appId: "1:298423462008:web:eaa294caa4d3b6451f658d",
  measurementId: "G-1T66BTMQ88"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Try to get user's name from Firestore
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    let name = user.email;
    if (docSnap.exists()) {
      const data = docSnap.data();
      name = data.firstName + " " + data.lastName;
    }

    // Show name in element with id="username"
    const userNameEl = document.getElementById("username");
    if (userNameEl) userNameEl.textContent = name;

    // Show/hide auth buttons if needed
    const signInBtn = document.querySelector(".btn.primary");
    const signUpBtn = document.querySelector(".btn.link");
    if (signInBtn) signInBtn.style.display = "none";
    if (signUpBtn) signUpBtn.style.display = "none";
  } else {
    console.log("No user logged in");
  }
});
if (!user && window.location.pathname !== "/logreg.html") {
  window.location.href = "logreg.html";
}
// If user is logged in, redirect to dashboard
if (user && window.location.pathname === "/logreg.html") {
  window.location.href = "mainpage.html";
}