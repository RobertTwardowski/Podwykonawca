import React, { useState } from 'react'
import { SearchFormStyles, Wrapper } from './SearchForm.styles'

const Wojewodztwa = [
  { label: 'Dolnośląskie', value: 'dolnośląskie' },
  { label: 'Kujawsko-Pomorskie', value: 'kujawsko-pomorskie' },
  { label: 'Lubelskie', value: 'lubelskie' },
  { label: 'Lubuskie', value: 'lubuskie' },
  { label: 'Łódzkie', value: 'łódzkie' },
  { label: 'Małopolskie', value: 'małopolskie' },
  { label: 'Mazowieckie', value: 'mazowieckie' },
  { label: 'Opolskie', value: 'opolskie' },
  { label: 'Podkarpackie', value: 'podkarpackie' },
  { label: 'Podlaskie', value: 'podlaskie' },
  { label: 'Pomorskie', value: 'pomorskie' },
  { label: 'Śląskie', value: 'śląskie' },
  { label: 'Świętokrzyskie', value: 'świętokrzyskie' },
  { label: 'Warmińsko-Mazurskie', value: 'warmińsko-mazurskie' },
  { label: 'Wielkopolskie', value: 'wielkopolskie' },
  { label: 'Zachodniopomorskie', value: 'zachodniopomorskie' }
]
const SearchForm = () => {
 
    
        const [imie, setImie] = useState('');
        const [nazwisko, setNazwisko] = useState('');
        const [email, setEmail] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(`Imię: ${imie}, Nazwisko: ${nazwisko}, Email: ${email}`)}

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Imię:
        <input type="text" value={imie} onChange={(e) => setImie(e.target.value)} />
      </label>
      <br />
      <label>
        Nazwisko:
        <input type="text" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)} />
      </label>
      <br />
      <label>
        E-mail:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Wyślij</button>
    </form>
  );
}

export default SearchForm
