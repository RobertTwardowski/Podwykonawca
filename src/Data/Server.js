const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Company } = require('Database.js');

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/nazwa_bazy_danych', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Błąd połączenia z bazą danych:'));
db.once('open', () => {
  console.log('Połączono z bazą danych MongoDB');
});


app.post('/api/form', async (req, res) => {
  try {
    const {
        selectedProvince,
        selectedCity,
        selectedProfession,
        companyName,
        phoneNumber,
        shortDescription,
        longDescription,
        images
    } = req.body;

    const company = new Company({
        selectedProvince,
        selectedCity,
        selectedProfession,
        companyName,
        phoneNumber,
        shortDescription,
        longDescription,
        images
    });

    await company.save();

    res.status(200).json({ message: 'Obiekt został dodany do bazy danych' });
  } catch (error) {
    console.error('Błąd podczas dodawania obiektu do bazy danych', error);
    res.status(500).json({
      error: 'Wystąpił błąd podczas dodawania obiektu do bazy danych',
    });
  }
});

app.listen(5000, () => {
  console.log('Serwer działa na porcie 5000');
});