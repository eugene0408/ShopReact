import React, {Suspense} from 'react';
import {createRoot} from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollToTop from './components/ScrollToTop';


const root = createRoot(document.getElementById('root'))

// Get data from json files before render app
const getDataAndRender = async () => {
  let goodsData = await fetch('data/goods.json');
  let goods = await goodsData.json(); 
  let categoriesData = await fetch('data/categories.json');
  let categories = await categoriesData.json();

  return(
    root.render(
      <React.StrictMode>
          <HashRouter>
            <ScrollToTop/>
            <App 
              goodsList={goods}
              categories={categories}
            />
          </HashRouter>
      </React.StrictMode>,
    )

  )
};

getDataAndRender();



// "homepage": "https://carpatian-shop.netlify.app/",
