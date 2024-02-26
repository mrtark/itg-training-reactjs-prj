//PK: NOT USED for the sake of integration with others'assignments
import { Link, Route, Routes } from 'react-router-dom';
import CategoriesDataGrid from "./CategoriesDataGrid";
import OrderDataGrid from "./OrderDataGrid.jsx";
import CategoriesList from "./CategoriesList.jsx"
function MainMenu() {
  return (<>
    <ul>   
      <li>
        <Link to="/orders" activeClassName="active">Sipariş Listesi</Link>
      </li>
      <li>
        <Link to="/addCategories" activeClassName="active">Kategori Ekle</Link>
      </li>
    </ul>

    </>);
  
}

export default MainMenu;
