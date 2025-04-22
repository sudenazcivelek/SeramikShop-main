import { Route, Routes } from "react-router-dom";
 import HomePage from "./pages/HomePage";
 import ShopPage from "./pages/ShopPage";
 import BlogPage from "./pages/BlogPage";
 import ContactPage from "./pages/ContactPage";
 import CartPage from "./pages/CartPage";
 import AuthPage from "./pages/AuthPage";
 import ProductDetailsPage from "./pages/ProductDetailsPage";
 import BlogDetailsPage from "./pages/BlogDetailsPage";
 import ProfilePage from "./pages/ProfilePage";
 import Logout from "./pages/Logout";
 import UserInfo from "./pages/UserInfo"; 


 import "./App.css";
 
 function App() {
   return (
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/shop" element={<ShopPage />} />
       <Route path="/blog" element={<BlogPage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/cart" element={<CartPage />} />
       <Route path="/auth" element={<AuthPage />} />
       <Route path="/profile" element={<ProfilePage />} />
       <Route path="/product/:id" element={<ProductDetailsPage />} />
       <Route path="/blog/:id" element={<BlogDetailsPage />} />
       <Route path="/logout" element={<Logout />} />
       <Route path="/user-info" element={<UserInfo />} />
     </Routes>
      );
    }
    
    export default App;