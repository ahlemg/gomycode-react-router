import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';
import FeaturesProducts from './components/FeaturesProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import PageNotFound from './components/PageNotFound';
import Admin from './components/Admin';
import Profil from './components/Profil';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import RequiredAuth from './components/RequiredAuth';

function App() {
  return (
    <>
    <AuthProvider>
    <NavBar/>
      <Routes>
       <Route  path= "/" element={<Home/>}/>

       <Route path ="about" element = {<About/>} />
       <Route path= "order-confirmed" element = {<OrderSummary/>}/>
       
       <Route path= "products" element = {<Products/>}>
        
         <Route index element ={<FeaturesProducts/>}/>
         <Route path = "featured" element ={<FeaturesProducts/>}/>
         <Route path = "new" element = {<NewProducts/> } />

        </Route>
       <Route path = "users" element ={<Users/>} />
       <Route path = "users/:id" element ={<UserDetails />} />
       <Route path = "users/admin" element ={<RequiredAuth><Admin/></RequiredAuth>} />
       <Route path = "profil" element ={<RequiredAuth><Profil/></RequiredAuth>} />
       <Route path = "login" element ={<Login/>} />


       <Route path = "*" element ={<PageNotFound />} />
       

        
      </Routes>
      </AuthProvider>
      
    </>
  );
}

export default App;
