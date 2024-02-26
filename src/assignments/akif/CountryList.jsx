import React, { useState } from "react";
import { countries } from '../../data/countries'; //"./data/countries";

export default function Countries() {
  const [slicedCountries, setSlicedCountries] = useState(
    countries.slice(0, 10)
  );

  const clearFirst = () => {
    setSlicedCountries(countries.slice(10 - slicedCountries.length + 1, 10));
  };

  const clearAll = () => {
    setSlicedCountries([]);
  };

  return (
    <>
      <button onClick={clearFirst}>Clear First</button>

      <button onClick={clearAll}>Clear All</button>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Code</th>
            <th>Name</th>
            <th>Population</th>
            <th>Capital</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {slicedCountries.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.population}</td>
                <td>{item.capital}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
