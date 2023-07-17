const mongoose = require('mongoose');

const connectionURL = 'mongodb://localhost:27017/Podwykonawca.Podwykonawca'; 
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Błąd połączenia z bazą danych:'));
db.once('open', () => {
  console.log('Połączono z bazą danych MongoDB');
});

const companySchema = new mongoose.Schema({
  nazwa_firmy: String,
  specjalizacja: String,
  miejscowosc: String,
  wojewodztwo: String,
  numer_telefonu: String,
  krotki_opis_firmy: String,
  dlugi_opis_firmy: String,
  zdjecia: [String],
});

const Company = mongoose.model('Company', companySchema);

module.exports = { Company };