import { useState, useEffect } from 'react';
// Styles
import './MainPage.css';
// Images
import background from '../../assets/forest.jpg';
// Components
import DarkCover from '../../components/DarkCover';
import Card from '../../components/Card/Card';
import FilterButton from '../../components/FilterButton/FilterButton';
import Categories from '../../data/categories.json'



const MainPage = ({
  filteredGoods,
  selectedCategory,
  setSelectedCategory,
  wishList,
  setWishList
}) => {

  return (
    <div className='MainPage'>

      <header 
        className='header'
        style={{ backgroundImage: `url(${background})` }}
      >
        <DarkCover/>
        <h1>100% натуральні продукти на основі трав</h1>

      
      </header>

      
      <div className="catalog">

          {/* Categries */}
          <div className='categories-container'>
          { Categories.map((category)=>(
    
            <FilterButton 
              title={category.title}
              category={category.id}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              key={category.id}
            />

          ))}
        </div>


        {/* Goods list */}
        { filteredGoods.map((good)=> (
          <Card 
            category={good.category}
            name={good.name}
            image={good.image}
            size={good.size}
            prise={good.price}
            shortDescription={good.shortDescription}
            description={good.description}
            articul={good.articul}
            key={good.articul}
            wishList={wishList}
            setWishList={setWishList}

          />
        ))
        }


      </div>
        
       
    </div>
  )
}


export default MainPage