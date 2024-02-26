// import SiteFooter from "./components/SiteFooter";
// import SiteHeader from "./components/SiteHeader";
// import SiteContent from "./components/SiteContent";
// import JsxEventSample from "./jsx/JsxEventSample";
// import ProductBox from "./props/ProductBox";
// import UserDetail from "./props/UserDetail";
// import ObjectArraySample from "./jsx/ObjectArraySample";
// import ObjectArrayTry1235 from "./jsx/ObjectArrayTry1235";
//import { Route } from "react-router";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import ObjectArrayTry1235 from "./jsx/ObjectArrayTry1235";
// import SupplierDetail from "./pages/SupplierDetail";
// import StateIntro from "./state/StateIntro";
// import StateArray from "./state/StateArray";
import Assignment100224PK from "./assignments/perihan/Assignment100224";
import Assignment100224DE from "./assignments/duhan/ShowCountry";
import Assignment100224DE2 from "./assignments/duhan/BigButton";
import Assignment100224MA from "./assignments/murat/Odev1";
import Assignment100224EC from "./assignments/emre/Countries";
import Assignment100224EC2 from "./assignments/emre/Buyuyen_Buton";
import Assignment100224IB from "./assignments/ihsan/ObjectArraySample";
import Assignment100224IB2 from "./assignments/ihsan/Part1";
import Assignment170224IB from "./assignments/ihsan/IhsanOrders.jsx";
import Assignment100224MY from "./assignments/muhsin/CountryList";
import Assignment100224MY2 from "./assignments/muhsin/StateChangeButton";
import Assignment170224MY from "./assignments/muhsin/OrderDataGrid.jsx";
import Assignment170224MY2 from "./assignments/muhsin/CategoriesDataGrid.jsx";
import Assignment170224MYEK from "./assignments/muhsin/CategoriesList.jsx";
import Assignment100224BT from "./assignments/bilal/CountriesClass";
import Assignment100224BT2 from "./assignments/bilal/Button";
import Assignment170224BT from "./assignments/bilal/TablePage";
import Assignment100224AC from "./assignments/alp/StateHW.tsx"; //P.K. ERROR: Module not found: Error: Can't resolve './assignments/alp/StateHW' in 'C:\Users\user\Desktop\itg-training-prj\src'
//P.K.:https://stackoverflow.com/questions/71885069/module-not-found-error-cant-resolve-the-typescript-file-when-adding-typescrip
import Assignment100224SB from "./assignments/serhat/CountryPage.tsx"; 
import Assignment100224SB2 from "./assignments/serhat/Button.tsx"; 
import Assignment100224CK from "./assignments/cigdem/Odev2"; 
import Assignment100224CK2 from "./assignments/cigdem/Odev"; 
import Assignment100224AY from "./assignments/akif/CountryList"; 
import Assignment100224AY2 from "./assignments/akif/ExpandingButton"; 
import Assignment100224AS from "./assignments/arzu/CountryList"; //15.02.24
import Assignment100224AS2 from "./assignments/arzu/Homework"; //15.02.24
import Assignment100224FO from "./assignments/furkan/StateCountries"; //16.02.24
import Assignment100224FO2 from "./assignments/furkan/StateButton"; //16.02.24 
import Assignment100224IA from "./assignments/ismail/CountryList"; //21.02.24 
import Assignment100224IA2 from "./assignments/ismail/StateChange"; //21.02.24  
import Assignment100224BK from "./assignments/burak/ListCountries"; //14.02.24
import Assignment100224BK2 from "./assignments/burak/ButtonResizer"; //14.02.24 
import ProductsPage from "./axiosSample/ProductsPage.jsx";
import FavoritesPage from "./context/FavoritesPage.jsx";
import SiteFooter  from "./components/SiteFooter.tsx";
import ProductsDataGrid from "./dayThreeTraining/ProductsDataGrid.jsx";
//import CustomerPage from "./axiosSample/CustomerPage.jsx";
//import MainMenu from "./assignments/muhsin/MainMenu";

// import SupplierTable from "./state/SupplierTable";
// import ProductsTable from "./state/ProductsTable";
// import StateRandomNumbers from "./state/StateRandomNumbers";
// import ProductsPage from "./axiosSample/ProductsPage";
// import CustomerPage from "./axiosSample/CustomerPage.jsx";
// import AddProduct from "./axiosSample/AddProduct";

function App() {
//return <MainMenu/>
  /* 24.02.24 10:00- ONSITE  */
//  return <ProductsPage/>
  /* 24.02.24 10:00- ONSITE  */

  /**17.02.24 10:00-15:30 ONSITE */
  //return <ProductsPage/>
  //return <CustomerPage/>
  //return <AddProduct/>;
  //return <AddProduct2/>;
  //return <Intro/>; //ITGButton
  //return <ProductsDataGrid/>
  /**17.02.24 10:00-15:30 ONSITE */

  /**15.02.24 20:00-21:26 ONLINE */
  //return  <SupplierTable/>
  //return  <ProductsTable/>
  //return  <StateRandomNumbers/>
  /**15.02.24 20:00-21:26 ONLINE */

  /**1. ASSIGNMENTS from 10.02.24 session */
  return <>
  <h1>10.02.24-24.02.24 Training Assignments</h1>
  <h2>Assignment-1 (Declaration: 12.02.24) </h2>
    <p>1- Ekranda 10 adet ülke listele. Ekranın üzerine bir buton koy. Butona her tıkladığında en üstte listelenmiş ülkeyi silsin.
      Ek olarak bir buton daha koy ( clear button ). Butona tıkladığında tüm listeyi silsin.
    </p>
    <p>2- Ekrana bir adet buton koy. Butona her tıkladığında butonun kendi genişlik ve yüksekliği 100’er pixel artsın</p>
  <h2>Assignment-2 (Declaration: 21.02.24) </h2>
    <p>1-Northwind puplic api urlden(URL: https://northwind.vercel.app/api/orders) datalar çekilip ( id, customerId, orderDate ve shippedDate kolonları ) datagrid içerisinde gösterilecek</p>
       <b>* Tarih kolonlarında format "02 Mayıs 2023 Perşembe" olmalıdır
       * En sağ kolonda bir silme butonu olup, silme işlemi gerçekleşmelidir.
      * Datagrid Türkçe olmalıdır</b>
    <p>2-Ekranda name ve description adında iki input ve bir button olmalı. Butona tıkladığınızda aşağıda belirtilen url e data POST edilmelidir.
URL: https://northwind.vercel.app/api/categories
    </p> 
   <ul>
    {/* <li><Link to="/">Home</Link></li> */}
    <li><Link to="/assignment1PK">Perihan-Ass1</Link></li>
    <li><Link to="/assignment1DE">Duhan-Ass1</Link></li>
    <li><Link to="/assignment1DE2">Duhan-Ass1-Button</Link></li>
    <li><Link to="/assignment1MA">Murat-Ass1</Link></li>
    <li><Link to="/assignment1IB">Ihsan-Ass1</Link></li>
    <li><Link to="/assignment1IB2">Ihsan-Ass1-Button</Link></li>
    <li><Link to="/assignment2IB">Ihsan-Ass2</Link></li>
    <li><Link to="/assignment1MY">Muhsin-Ass1</Link></li>
    <li><Link to="/assignment1MY2">Muhsin-Ass1-Button</Link></li>
    <li><Link to="/assignment2MY">Muhsin-Ass2-Sipariş Listesi</Link></li>
    <li><Link to="/assignment2MY2">Muhsin-Ass2-Kategori Ekle</Link></li>
    <li><Link to="/assignment1EC">Emre-Ass1</Link></li>
    <li><Link to="/assignment1EC2">Emre-Ass1-Button</Link></li>
    <li><Link to="/assignment1BT">Bilal-Ass1</Link></li>
    <li><Link to="/assignment1BT2">Bilal-Ass1-Button</Link></li>
    <li><Link to="/assignment2BT">Bilal-Ass2-Datatable</Link></li>
    <li><Link to="/assignment1AC">Alp-Ass1</Link></li> 
    <li><Link to="/assignment1SB">Serhat-Ass1</Link></li>
    <li><Link to="/assignment1SB2">Serhat-Ass1-Button</Link></li>
    <li><Link to="/assignment1CK">Çiğdem-Ass1</Link></li>
    <li><Link to="/assignment1CK2">Çiğdem-Ass1-Button</Link></li>
    <li><Link to="/assignment1AY">Akif-Ass1</Link></li>
    <li><Link to="/assignment1AY2">Akif-Ass1-Button</Link></li>
    <li><Link to="/assignment1AS">Arzu-Ass1</Link></li>
    <li><Link to="/assignment1AS2">Arzu-Ass1-Button</Link></li>
    <li><Link to="/assignment1FO">Fukan-Ass1</Link></li>
    <li><Link to="/assignment1FO2">Furkan-Ass1-Button</Link></li>
    <li><Link to="/assignment1IA">İsmail-Ass1</Link></li>
    <li><Link to="/assignment1IA2">İsmail-Ass1-Button</Link></li>
    <li><Link to="/assignment1BK">Burak-Ass1</Link></li>
    <li><Link to="/assignment1BK2">Burak-Ass1-Button</Link></li>
    <li><Link to="/products">Products</Link></li>  {/* 24.02.24 10:00- ONSITE  */}
    <li><Link to="/favorites">Favorites</Link></li>  {/* 24.02.24 10:00- ONSITE  */}

   {/* 10.02.24 09:00-16:25 ONSITE */}
   {/* <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/suppliers">Suppliers</Link></li>
    <li><Link to="/stateintro">StateIntro</Link></li>  
    <li><Link to="/statearray">StateArray</Link></li> */}
   {/* 10.02.24 09:00-16:25 ONSITE */}

  </ul> 
  {/* Asagidaki yazis tarzi browsera tum html yukluyor bunun yerine yukarıdaki Link i kullan
   <ul>
    <li><a href="/about">About</a></li>    
    <li><a href="/contact">Contact</a></li>       
  </ul> */}
  {/* Warning: Route element must be in PascalCase or SCREAMING_SNAKE_CASE */}
  <Routes>
    {/* <Route path="/" element={<Home/>} /> */}

    <Route path="/assignment1PK" element={<Assignment100224PK/>} /> 
    <Route path="/assignment1DE" element={<Assignment100224DE/>} />
    <Route path="/assignment1DE2" element={<Assignment100224DE2/>} />
    <Route path="/assignment1MA" element={<Assignment100224MA/>} />
    <Route path="/assignment1IB" element={<Assignment100224IB/>} />
    <Route path="/assignment1IB2" element={<Assignment100224IB2/>} />
    <Route path="/assignment2IB" element={<Assignment170224IB/>} />

    <Route path="/assignment1MY" element={<Assignment100224MY/>} />
    <Route path="/assignment1MY2" element={<Assignment100224MY2/>} />

    <Route path="/assignment2MY" element={<Assignment170224MY/>} />
    <Route path="/assignment2MY2" element={<Assignment170224MY2/>} />
    <Route path="/categoriesList" element={<Assignment170224MYEK/>} />

    <Route path="/assignment1EC" element={<Assignment100224EC/>} />
    <Route path="/assignment1EC2" element={<Assignment100224EC2/>} />
    <Route path="/assignment1BT" element={<Assignment100224BT/>} />     
    <Route path="/assignment1BT2" element={<Assignment100224BT2/>} />
    <Route path="/assignment2BT" element={<Assignment170224BT/>} />
    <Route path="/assignment1AC" element={<><Assignment100224AC vendorId="50187"/></>} /> 
    <Route path="/assignment1SB" element={<Assignment100224SB/>} />
    <Route path="/assignment1SB2" element={<Assignment100224SB2/>} />
    <Route path="/assignment1CK" element={<Assignment100224CK/>} />
    <Route path="/assignment1CK2" element={<Assignment100224CK2/>} />
    <Route path="/assignment1AY" element={<Assignment100224AY/>} />
    <Route path="/assignment1AY2" element={<Assignment100224AY2/>} />
    <Route path="/assignment1AS" element={<Assignment100224AS/>} />
    <Route path="/assignment1AS2" element={<Assignment100224AS2/>} />
    <Route path="/assignment1FO" element={<Assignment100224FO/>} />
    <Route path="/assignment1FO2" element={<Assignment100224FO2/>} />
    <Route path="/assignment1IA" element={<Assignment100224IA/>} />
    <Route path="/assignment1IA2" element={<Assignment100224IA2/>} />
    <Route path="/assignment1BK" element={<Assignment100224BK/>} />
    <Route path="/assignment1BK2" element={<Assignment100224BK2/>} />
    <Route path="/products" element={<ProductsPage/>} />
    <Route path="/favorites" element={<FavoritesPage/>} />{/* 24.02.24 10:00- ONSITE  */}

    {/* <Route path path="/about" element={<About/>} />
    <Route path path="/contact" element={<Contact/>} />
    <Route path path="/suppliers" element={<ObjectArrayTry1235/>} />
    <Route path path="/suppliers/:id" element={<SupplierDetail/>} />
    <Route path path="/stateintro" element={<StateIntro/>} />
    <Route path path="/statearray" element={<StateArray/>} /> */}
    <Route path="*" element={<NotFound/>} />
  </Routes> 

    {/* CTRL+kc => commenting lines of code
    <SiteHeader></SiteHeader>
    <SiteContent></SiteContent>
    <SiteFooter></SiteFooter>
    <JsxEventSample></JsxEventSample>
    <ProductBox name="soğan" unitPrice={30} points={[3,5,4,7]}></ProductBox>
    <UserDetail name="Murat" surname="Yılmaz" age={20}></UserDetail>
    <ObjectArraySample/>
    <ObjectArrayTry1235/> */}

    <SiteFooter/>

 </>
}

export default App;
//props, state