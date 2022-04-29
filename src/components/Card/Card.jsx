import './Card.css'
import {ReactComponent as CartIcon} from '../../assets/cart.svg'
import {ReactComponent as LikeIcon} from '../../assets/heart_icon.svg'
import Hrn from '../Hrn'



const Card = ({
  image, 
  name, 
  size, 
  prise, 
  shortDescription,
  articul,
  inWishlist,
  inCart,
  goods,
  setGoods
}) => {
  // Add/remove items to cart/wishlist 
    const cardButtonsHandler = (list) => (e)=> {
      let goodsList = goods;
      let goodIndex = goodsList.findIndex((good => good.articul == e.currentTarget.value));
      goodsList[goodIndex][list] = !goodsList[goodIndex][list];
      console.log(goodsList)
      setGoods([...goodsList]);
    }

  return (
    <div className='card'>

      <div className="card-image"
        style={{backgroundImage: `url(${image})`}}
      >
        <button 
          className={inWishlist ? "like-button liked" : "like-button"}
          value={articul}
          onClick={cardButtonsHandler('inWishlist')}
        >
          <LikeIcon />
        </button>

      </div>


      <div className="card-content">

        <div className="card-content__name">
          <h2 
            style={{
              fontWeight: '700',
              fontSize: '24px',
              textTransform: 'uppercase'
            }}
          >
            {name}
          </h2>
          <p>
            {size}
            <span>г.</span>
          </p>
        </div>

        <div className="card-content__short-descr">
          <p 
            style={{
              fontWeight: '200'
            }}
          >
            {shortDescription}
          </p>
        </div>


        <div className="card-content__prise">

          <p 
            style={{
              fontWeight: "700",
              fontSize: "32px"
            }}
          >

            {prise}

            <Hrn styles={{
              fontSize: '26px',
              fontWeight: '300'
            }}/>

          </p>

          <button 
            className='card-content__button'
            value={articul}
            onClick={cardButtonsHandler('inCart')}
          >
            <CartIcon className={inCart ? "icon-active":""} />

            {inCart ? "у кошику":"у кошик"}
          </button>

        </div>

     

      </div>




    </div>
  )
}

export default Card