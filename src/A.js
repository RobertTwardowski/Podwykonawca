import React, { useEffect, useState } from 'react';
import axios from 'axios';

const A = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('/api/companies'); // Wyślij żądanie GET do endpointu /api/companies
        setCompanies(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania danych z bazy danych:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>Dane z bazy danych MongoDB:</h1>
      {companies.map((company) => (
        <div key={company._id}>
          <h2>{company.companyName}</h2>
          <p>{company.city}</p>
          {/* Wyświetl inne pola danych */}
        </div>
      ))}
    </div>
  );
};

export default A;