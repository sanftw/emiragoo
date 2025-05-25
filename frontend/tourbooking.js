import {
  getFirestore, collection, addDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

import {
  getAuth, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const db = getFirestore();
const auth = getAuth();

const form = document.getElementById("bookingForm");
const message = document.getElementById("confirmationMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const booking = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    location: document.getElementById("location").value,
    date: document.getElementById("date").value,
    notes: document.getElementById("notes").value,
    timestamp: serverTimestamp()
  };

  try {
    await addDoc(collection(db, "tourBookings"), booking);
    message.innerText = "Booking successful!";
    form.reset();
  } catch (err) {
    message.innerText = "Something went wrong. Please try again.";
    console.error(err);
  }
});
