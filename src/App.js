import { useState, useEffect } from "react";
// Router
import { Routes, Route, Link } from "react-router-dom";
// Grid
import { Col, Container, Row } from "react-grid-system";
// Data
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
  // Add properies to goods
  const goodsList = Goods.map(obj => (
    {...obj, 
      inWishlist: false,
      inCart: false,
      amount: 1
    }));

  // States
  const [goods, setGoods] = useState(goodsList);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredGoods, setFilteredGoods] = useState([]);
  const [wishList, setWishList] = useState([]);

  const goodsFilter = () => {
    if(selectedCategory == 'all'){
      setFilteredGoods([...goods])
      console.log('filtered')
    }else{
      setFilteredGoods(goods.filter(el => el.category === selectedCategory))
    }  
  }


  useEffect(()=>{
    goodsFilter();
  },[selectedCategory]);

  useEffect(
    ()=>console.log("changed"), [goods]
  )

  return (
    <div className="App">


                
          <div className="topline">
            <Container>
              <Row>
                <Col sm={12} 
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }} 
                >

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
                </Col>
              </Row>
            </Container>
          </div>

 



      <Routes>

        <Route 
          path="/" 
          element=
            {<MainPage 
              filteredGoods={filteredGoods}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              goods={goods}
              setGoods={setGoods}
            />} 
        />

        <Route 
          path="/wishlist" 
          element=
            {<WishList
              goods={goods}
              setGoods={setGoods}
              wishList={wishList}
              setWishList={setWishList}
             />} 
        />

        <Route 
          path="/cart" 
          element=
            {<Cart 
              goods={goods}
              setGoods={setGoods}
            />} 
        />

      </Routes>
  


    


    </div>
  );
}

export default App;
