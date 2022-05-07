import React from 'react';
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'))

// Get data from json files before render app
const getDataAndRender = async () => {
  let goodsData = await fetch('data/goods.json');
  let goods = await goodsData.json(); 
  let categoriesData = await fetch('data/categories.json')
  let categories = await categoriesData.json()

  return(
    root.render(
      <React.StrictMode>
          <BrowserRouter>
            <App 
              goodsList={goods}
              categories={categories}
            />
          </BrowserRouter>
      </React.StrictMode>,
    )

  )
};

getDataAndRender();





// root.render(

//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>

// )


// "homepage": "https://carpatian-shop.netlify.app/",
