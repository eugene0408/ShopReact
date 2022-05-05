import { useState, useEffect } from "react";
import styled from 'styled-components';
// Router
import { Routes, Route, Link, useLocation } from "react-router-dom";
// Grid
import { Col, Container, Row } from "react-grid-system";
// Pages
import MainPage from './pages/MainPage/MainPage';
import WishList from "./pages/WishList/WishList";
import Cart from "./pages/Cart/Cart";
// Components
import { Categories } from "./components/Categories";
import { CartButton, BackButton, Indicator } from "./components/Styled/Buttons";
import { 
  ToplineWrapper, 
  ToplineContainer, 
  ToplineNav, 
  ToplineButton,
  TopWrapper,
  TopContainer,
  WishLink
 } from "./components/Styled/TopLine";

// Icons
import {ReactComponent as MenuIcon} from './assets/menu.svg';
import {ReactComponent as CartIcon} from './assets/cart.svg';
import {ReactComponent as HeartIcon} from './assets/heart_icon.svg';
import {ReactComponent as BackIcon} from './assets/left_arrow.svg';
// Styles
import './fonts/fonts.css';
import './App.css';


const App =({
  goodsList, 
  categories
}) => {

  // Add attributes to goods list from local storage or defaults
  const goodsListAttr = () => {
    // Default values
    let list = goodsList.map(obj => (
      {...obj, 
        inWishlist: false,
        inCart: false,
        amount: 1
      }));

    if(localStorage.getItem('local') === null){
      // Return default if nothing been saved
      return list  
    }else{
      // Get saved values from local storage
      let localData = JSON.parse(localStorage.getItem('local'));
      // Replace default values
      localData.forEach(localEl => {
        let index = list.findIndex(listEl => localEl.articul === listEl.articul);
        list[index] = localEl
      });

      return list
    }
  };

  // States
  const [goods, setGoods] = useState(goodsListAttr);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredGoods, setFilteredGoods] = useState([]);


  const goodsInCart = goods.filter(good => good.inCart === true);
  const wishList = goods.filter(good => good.inWishlist === true);

  // Current page
  const currentLocation = useLocation().pathname


  // Filter goods by selected category
  const goodsFilter = () => {
    if(selectedCategory == 'all'){
      setFilteredGoods([...goods])
    }else{
      setFilteredGoods(goods.filter(el => el.category === selectedCategory))
    }  
  }

  const saveToLocal = () => {
    const dataToSave = [...new Set([...goodsInCart, ...wishList])]
    localStorage.setItem('local', JSON.stringify(dataToSave));
  }

  // Effect
  useEffect(()=>{
    goodsFilter();
  },[selectedCategory]);

  useEffect(() => {
    saveToLocal();
  }, [goods])



  const cartHasItems = () => {
    if(goodsInCart.length >= 1) return  goodsInCart.length; 
    return false;
  }
  cartHasItems();



 
  return (
    <div className="App">
          {/*------- Topline Menu --------*/}
          <ToplineWrapper>
            <ToplineContainer>

              <ToplineNav>
                <ToplineButton>
                  <Link to='/'>
                    <MenuIcon />
                  </Link>
                </ToplineButton>
              </ToplineNav>  

            </ToplineContainer>
          </ToplineWrapper>



          {/* ------ Top Navigation displaing only on Main Page ----- */}
          {currentLocation === '/' &&       
            <TopWrapper>
              <TopContainer>

                {/*----- Category Select ---------*/}  
                <Categories 
                  options={categories}
                  onChange={e => setSelectedCategory(e.value)}
                  defaultValue={categories[0]}
                  value={categories[categories.findIndex(el => el.value == selectedCategory)]}
                />

                {/*------- Wishlist Link ---------*/}
                <Link to={'/wishlist'}>
                  <WishLink>
                    <HeartIcon />
                    <span>Обрані</span>
                  </WishLink>
                </Link>

              </TopContainer>
            </TopWrapper>
          }



          {/*--------- Bottom Navigation ----------*/}
          {(cartHasItems() && currentLocation !== '/cart')  &&
            <Link to="/cart">
              <CartButton>
                <CartIcon/>
                  <Indicator>
                    {cartHasItems()}
                  </Indicator>
              </CartButton>         
            </Link>
          }

          {currentLocation === '/cart' &&
            <Link to="/">
              <CartButton>
                <BackIcon/>
              </CartButton>
            </Link>
          }

          {(currentLocation !== '/' && currentLocation !== '/cart') &&
            <Link to="/">
              <BackButton>
                <BackIcon/>
              </BackButton>
            </Link>
          }



      <Routes>

        <Route 
          path="/" 
          element=
            {<MainPage 
              filteredGoods={filteredGoods}
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
            />} 
        />

        <Route 
          path="/cart" 
          element=
            {<Cart 
              goods={goods}
              setGoods={setGoods}
              goodsInCart={goodsInCart}
            />} 
        />

      </Routes>

    </div>
  );
}

export default App;
