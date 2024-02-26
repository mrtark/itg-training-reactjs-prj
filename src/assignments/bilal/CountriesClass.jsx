import React, { useState } from 'react';
import { countries as Countries} from '../../data/countries'; 

//import { Countries } from '../data/Countries';
//P.K. ERROR: export 'Countries' (imported as 'Countries') was not found in '../../data/countries' (possible exports: countries)
const CountriesClass = () => {
  const [countries, setCountries] = useState(Countries);

  const handleRemoveOne = () => {
    if (countries.length === 0) {
      alert("You've already deleted it, what are you waiting for?!");
      return;
    }

    const updatedCountries = [...countries];
    updatedCountries.shift();
    setCountries(updatedCountries);

    if (updatedCountries.length === 0) {
      alert("All countries successfully deleted!");
      setCountries(Countries); 
    }
  };

  const handleRemoveAll = () => {
    if (countries.length === 0) {
      alert("You've already deleted it, what are you waiting for?!");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete all countries?");
    if (confirmDelete) {
      setCountries([]);
      alert("All countries successfully deleted!");
    }
  };

  return (
    <div>
      <h2>Ülkeler</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '15px solid #ddd' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Population</th>
            <th>Capital</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{country.id}</td>
              <td>{country.name}</td>
              <td>{country.code}</td>
              <td>{country.population}</td>
              <td>{country.capital}</td>
              <td>{country.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleRemoveOne} style={{height:'3em'}}>Delete Top Country</button>
      <button onClick={handleRemoveAll} style={{ marginLeft: '96em',height:'3em' }}>Delete</button>
    </div>
  );
};

export default CountriesClass;