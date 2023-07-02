import './App.css';
import NavBar from "./components/NavBar/NavBar";
import NotFound from './components/NotFound/NotFound';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListConteiner from './containers/ItemListContainer';
import {BrowserRouter,Routes,Route,} from"react-router-dom";
import CartContainer from './containers/CartContainer/CartContainer';
import ShopProvider from './context/ShopProvider';
import BannerContainer from './containers/BannerContainer/BannerContainer';
import ContactUs from './containers/Contact Us/ContactUs';

function App() {
  
  return ( 
    //codigo JSX Mezcla entre HTML y JAVASCRIP
  <ShopProvider>
    <BrowserRouter>
      {/* Envio La NAVBAR con CATEGORIES como PROPIEDAD y la leo desde el otro archivo como un PARAMETRO, pueden enviarse un unico objeto con Varias propiedades */}
      <NavBar/>     
        <Routes>
          <Route path="/" element={<><BannerContainer/><ItemListConteiner/></>}/>
          <Route path="/category/:categoryId" element={<ItemListConteiner/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart/" element={<CartContainer/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="*" element={<NotFound/>}/>        
        </Routes>
    </BrowserRouter>
  </ShopProvider>
   )}

export default App;
