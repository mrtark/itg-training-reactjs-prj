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
import Assignment100224MY from "./assignments/muhsin/CountryList";
import Assignment100224MY2 from "./assignments/muhsin/StateChangeButton";
import Assignment100224BT from "./assignments/bilal/CountriesClass";
import Assignment100224BT2 from "./assignments/bilal/Button";
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
// import SupplierTable from "./state/SupplierTable";
// import ProductsTable from "./state/ProductsTable";
// import StateRandomNumbers from "./state/StateRandomNumbers";
// import ProductsPage from "./axiosSample/ProductsPage";
// import CustomerPage from "./axiosSample/CustomerPage.jsx";
// import AddProduct from "./axiosSample/AddProduct";

function App() {

  /* 24.02.24 10:00- ONSITE  */
//  return <ProductsPage/>
  /* 24.02.24 10:00- ONSITE  */

  /**17.02.24 10:00-15:30 ONSITE */
  //return <ProductsPage/>
  //return <CustomerPage/>
  //return <AddProduct/>;
  //return <AddProduct2/>;
  //return <Intro/>;
  /**17.02.24 10:00-15:30 ONSITE */

  /**15.02.24 20:00-21:26 ONLINE */
  //return  <SupplierTable/>
  //return  <ProductsTable/>
  //return  <StateRandomNumbers/>
  /**15.02.24 20:00-21:26 ONLINE */

  /**1. ASSIGNMENTS from 10.02.24 session */
  return <>
  <h1>10.02.24 Training Assignments</h1>

   <ul>
    {/* <li><Link to="/">Home</Link></li> */}
    <li><Link to="/assignment1PK">Perihan</Link></li>
    <li><Link to="/assignment1DE">Duhan</Link></li>
    <li><Link to="/assignment1DE2">Duhan-2</Link></li>
    <li><Link to="/assignment1MA">Murat</Link></li>
    <li><Link to="/assignment1IB">Ihsan</Link></li>
    <li><Link to="/assignment1IB2">Ihsan-2</Link></li>
    <li><Link to="/assignment1MY">Muhsin</Link></li>
    <li><Link to="/assignment1MY2">Muhsin-2</Link></li>
    <li><Link to="/assignment1EC">Emre</Link></li>
    <li><Link to="/assignment1EC2">Emre-2</Link></li>
    <li><Link to="/assignment1BT">Bilal</Link></li>
    <li><Link to="/assignment1BT2">Bilal-2</Link></li>
    <li><Link to="/assignment1AC">Alp</Link></li> 
    <li><Link to="/assignment1SB">Serhat</Link></li>
    <li><Link to="/assignment1SB2">Serhat-2</Link></li>
    <li><Link to="/assignment1CK">Çiğdem</Link></li>
    <li><Link to="/assignment1CK2">Çiğdem-2</Link></li>
    <li><Link to="/assignment1AY">Akif</Link></li>
    <li><Link to="/assignment1AY2">Akif-2</Link></li>
    <li><Link to="/assignment1AS">Arzu</Link></li>
    <li><Link to="/assignment1AS2">Arzu-2</Link></li>
    <li><Link to="/assignment1FO">Fukan</Link></li>
    <li><Link to="/assignment1FO2">Furkan-2</Link></li>
    <li><Link to="/assignment1IA">İsmail</Link></li>
    <li><Link to="/assignment1IA2">İsmail-2</Link></li>
    <li><Link to="/assignment1BK">Burak</Link></li>
    <li><Link to="/assignment1BK2">Burak-2</Link></li>
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
    <Route path="/assignment1MY" element={<Assignment100224MY/>} />
    <Route path="/assignment1MY2" element={<Assignment100224MY2/>} />
    <Route path="/assignment1EC" element={<Assignment100224EC/>} />
    <Route path="/assignment1EC2" element={<Assignment100224EC2/>} />
    <Route path="/assignment1BT" element={<Assignment100224BT/>} />
    <Route path="/assignment1BT2" element={<Assignment100224BT2/>} />
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

    <p>Site Footer</p>

 </>
}

export default App;
//props, state