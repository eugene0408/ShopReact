import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Goods from './data/goods.json';
// Pages
import MainPage from './pages/MainPage/MainPage';
import WishList from "./pages/WishList/WishList";
import Cart from "./pages/Cart/Cart";
// Icons
import {ReactComponent as MenuIcon} from './assets/menu.svg';
import {ReactComponent as CartIcon} from './assets/cart.svg';
import {ReactComponent as HeartIcon} from './assets/heart_icon.svg';
// Styles
import './fonts/fonts.css';
import './App.css';


function App() {



  // States
  const [goods, setGoods] = useState(Goods);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredGoods, setFilteredGoods] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [displayInWishlist, setDisplayInWishlist] = useState([]);
 
  const goodsFilter = () => {
    if(selectedCategory === 'all'){
      setFilteredGoods(Goods)
    }else{
      setFilteredGoods(Goods.filter(el => el.category === selectedCategory))
    }  
  }


  const addToDisplayInWishlist = () => {
    wishList.forEach(element => {
      setDisplayInWishlist(displayInWishlist.concat(Goods.filter(good => element == good.articul)))
      console.log("added to display")
    });
  }


  // Effect
  useEffect(()=>{
    goodsFilter();
  },[]);

  useEffect(()=>{
    goodsFilter();
  },[selectedCategory]);

  useEffect(()=> {
    addToDisplayInWishlist();
  }, [wishList]);


  return (
    <div className="App">



      <div className="topline">

          <nav>
            <div className="menu-button">
              <Link to='/'>
                <MenuIcon />
              </Link>
            </div>


            <div className="topline-buttons">

              <div className="topline-button">
                <Link to='/wishlist'>
                  <HeartIcon />
                </Link>
                
              </div>
    
              <div className="topline-button">
                <Link to="/cart">
                  <CartIcon />
                </Link>
              </div>

            </div>
 


        
          </nav> 

      </div>


      <Routes>

        <Route 
          path="/" 
          element=
            {<MainPage 
              filteredGoods={filteredGoods}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              wishList={wishList}
              setWishList={setWishList}
            />} 
        />

        <Route 
          path="/wishlist" 
          element=
            {<WishList
              wishList={wishList}
              setWishList={setWishList}
              displayInWishlist={displayInWishlist}
             />} 
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  


    


    </div>
  );
}

export default App;
