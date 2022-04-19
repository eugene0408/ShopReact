import React from 'react'
// Data
import Goods from '../../data/goods.json';
import Card from '../../components/Card/Card';

const WishList = ({
  wishList, 
  setWishList
}) => {
  let displayWishlist = []

  const addToDisplayWishlist = () => {
    wishList.forEach(element => {
      displayWishlist = displayWishlist.concat(Goods.filter(good => element == good.articul))
    });
  }

  addToDisplayWishlist();

  return (
    <div style={{marginTop: "3rem"}}>

      <h1>wish list:</h1>
      {
        displayWishlist.map((good) => (
          <Card 
            category={good.category}
            name={good.name}
            image={good.image}
            size={good.size}
            prise={good.price}
            shortDescription={good.shortDescription}
            description={good.description}
            articul={good.articul}
            favorite={good.favorite}
            wishList={wishList}
            setWishList={setWishList}
            key={good.articul}

          />
        ))
      }
    </div>
  )
}

export default WishList