import { useState, useEffect } from "react";
import styled from 'styled-components';
// Router
import { Routes, Route, Link, useLocation } from "react-router-dom";
// Grid
import { Col, Container, Row } from "react-grid-system";
// Components
import Layout from "./components/Layout";
// Pages
import MainPage from './pages/MainPage';
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Description from "./pages/Description";
// Fonts
import './fonts/fonts.css';

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

  // Add/remove items to goodsInCart/wishlist 
  const addToList = (list) => (e)=> {
    e.stopPropagation();
    let goodsList = goods;
    let goodIndex = goodsList.findIndex((good => good.articul === e.currentTarget.value));
    goodsList[goodIndex][list] = !goodsList[goodIndex][list];
    setGoods([...goodsList]);
  };

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



  return (
    <div className="App">
 
      <Routes>
        <Route path="/" element={<Layout goodsInCart={goodsInCart}/>}>

          <Route index 
            element={<MainPage 
              filteredGoods={filteredGoods}
              goods={goods}
              setGoods={setGoods}
              addToList={addToList}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}             
            />} 
          />
        
          <Route path="wishlist" 
            element={<WishList
              wishList={wishList}
              addToList={addToList}
            />} 
          />

          <Route path="cart" 
            element={<Cart 
              goods={goods}
              setGoods={setGoods}
              goodsInCart={goodsInCart}
            />} 
          />

          {/* Good description page */}
          <Route path=':id' 
            element={<Description
              goods={goods}
              setGoods={setGoods}
              addToList={addToList}
            />}
          />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
