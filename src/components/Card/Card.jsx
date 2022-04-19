import './Card.css'
import {ReactComponent as CartIcon} from '../../assets/cart.svg'
import {ReactComponent as LikeIcon} from '../../assets/heart_icon.svg'

const Card = ({
  image, 
  name, 
  size, 
  prise, 
  shortDescription,
  articul,
  wishList,
  setWishList
}) => {

  const addToWishList = (e) => {

    e.currentTarget.classList.toggle('liked')
    
    if(wishList.includes(e.currentTarget.value)){
        setWishList(wishList.filter((el) => el !== e.currentTarget.value));
     }else{
      wishList.push(e.currentTarget.value)
      setWishList(wishList)
    }

  }

  return (
    <div className='card'>

      <div className="card-image"
        style={{backgroundImage: `url(${image})`}}
      >
        <button 
          className="like-button"
          value={articul}
          onClick={e => addToWishList(e)}
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
            <span
              style={{
                fontSize: "26px",
                fontWeight: "300"
              }}
            >
              ₴
            </span> 

          </p>

          <button 
            className='card-content__button'
            value={articul}
          >
            <CartIcon />
            купити
          </button>

        </div>

     

      </div>




    </div>
  )
}

export default Card