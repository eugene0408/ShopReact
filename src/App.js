import { useState, useEffect } from "react";
// Router
import { Routes, Route, Navigate, useParams } from "react-router-dom";
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
        list[index] = {
          ...list[index],
          inCart: localEl.inCart,
          inWishlist: localEl.inWishlist,
          amount: localEl.amount
        }
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
    if(selectedCategory === 'all'){
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

  // Theme
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const setDefaultTheme = () => {
    if(localStorage.getItem('local-theme') === null){
      if(defaultDark){
        return 'dark'
      }else{
        return 'light'
      }
    }else{
      return JSON.parse(localStorage.getItem('local-theme'))
    }
  }

  const saveThemeToLocal = () => {
    localStorage.setItem('local-theme', JSON.stringify(theme))
  }

  const [theme, setTheme] = useState(setDefaultTheme());

  useEffect(() => {
    saveThemeToLocal();
  }, [theme])

  // Variable Routes 
  const {id} = useParams();

  return (
    <div className="App" data-theme={theme}>
 
      <Routes>
        <Route 
          path="/" 
          element={<Layout 
            goodsInCart={goodsInCart}
            theme={theme}
            setTheme={setTheme}
            />}
        >

          <Route index 
            element={<MainPage 
              filteredGoods={filteredGoods}
              goods={goods}
              setGoods={setGoods}
              addToList={addToList}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}     
              wishList={wishList}        
            />} 
          />
        
          <Route path="/wishlist" 
            element={<WishList
              wishList={wishList}
              addToList={addToList}
            />} 
          />

          <Route path="/cart" 
            element={<Cart 
              goods={goods}
              setGoods={setGoods}
              goodsInCart={goodsInCart}
            />} 
          />

          {/* Good description page */}
          <Route path='/:id' 
            element={<Description
              goods={goods}
              setGoods={setGoods}
              addToList={addToList}
            />}
          />
          <Route path='/wishlist/:id' element={<Navigate to={`/${id}`} replace/>}
          />

          <Route path='*' element={<Navigate to="/" replace/>} 
          />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
