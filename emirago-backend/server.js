const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { db, auth } = require('./utils/firebase');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('🌍 EmiraGo Backend with Firebase is Running');
});

// Example test route to read from Firestore
app.get('/test-firestore', async (req, res) => {
  try {
    const snapshot = await db.collection('test').get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (error) {
    console.error('❌ Firestore Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
