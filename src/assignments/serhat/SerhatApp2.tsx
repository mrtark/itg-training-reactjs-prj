//PK: was:App.tsx integrated as SerhatApp2.tsx
import React from 'react';

import Category from "./OrderPage.tsx"; //Serhat: import Category from './pages/Categories';
import CategoryAdd from "./CategoryAdd.tsx";//Serhat: import CategoryAdd from './pages/Categories/add';

function SerhatApp2() {
  return (
    <div className="App">
     <CategoryAdd/>

     <Category/>
    </div>
  );
}

export default SerhatApp2;