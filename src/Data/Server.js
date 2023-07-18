const express = require('express');
const mongoose = require('mongoose');
const Company = require('./models/Company');

// Tworzenie instancji serwera Express
const app = express();

// Konfiguracja połączenia z bazą danych MongoDB
mongoose.connect('mongodb://localhost:27017/Podwykonawca', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Połączono z bazą danych MongoDB');
})
.catch((error) => {
  console.error('Błąd podczas połączenia z bazą danych MongoDB:', error);
});

// Endpoint do pobrania danych firm
app.get('/api/companies', async (req, res) => {
  try {
    const companies = await Company.find(); // Pobranie wszystkich firm z bazy danych
    res.json(companies);
  } catch (error) {
    console.error('Błąd podczas pobierania danych firm:', error);
    res.status(500).json({ error: 'Błąd podczas pobierania danych firm' });
  }
});

// Uruchomienie serwera
app.listen(8000, () => {
  console.log('Serwer API działa na porcie 8000');
});