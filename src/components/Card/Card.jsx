import styled from 'styled-components';
import {ReactComponent as CartIcon} from '../../assets/cart.svg'
import {ReactComponent as LikeIcon} from '../../assets/heart_icon.svg'
import Hrn from './Hrn'

// Styled Components
const CardContainer = styled.div`
  display: inline-block;
  width: 360px;
  max-width: 96vw;
  background: var(--card-bg);
  border-radius: 1.5rem;
  overflow: hidden;
  z-index: 3;
  @media (min-width: 650px){
    margin: 1.5rem 1rem;
  }
`

const CardImage = styled.div`
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 12rem;
`

const LikeButton = styled.button`
  position: absolute;
  top: .5rem;
  right: .5em;
  background: transparent;
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  cursor: pointer;

  & svg path {
    fill: rgba(255, 255, 255, 0.5);
  }

  & .active path {
    fill: var(--orange);
  }
`
const ContentWrapper = styled.div`
  padding: 0.5rem 1rem;
`

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CardName = styled.h2`
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
`

const CardSize = styled.p`
  font-size: 24px;
  & span {
    font-size: 16px;
  }
`

const CardDescription = styled.p`
  font-weight: 200;
`

const CardPrice = styled.p`
  font-weight: 700;
  font-size: 32px;
`

const ActionButton = styled.button`
  font-family: 'Oswald', 'Oswald2', serif;
  background: transparent;
  color: white;
  border-radius: 1rem;
  border: 1px solid white;
  font-weight: 600;
  text-transform: uppercase;
  padding: .4rem 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 28px;
  & svg {
    height: 28px;
    margin-right: .5rem;
    z-index: 3;
  }
  & svg path {
    fill: white;
  }
  & .active path {
    fill: var(--orange);
  }
`

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
    const addToList = (list) => (e)=> {
      let goodsList = goods;
      let goodIndex = goodsList.findIndex((good => good.articul == e.currentTarget.value));
      goodsList[goodIndex][list] = !goodsList[goodIndex][list];
      setGoods([...goodsList]);
    };

  return (
    <CardContainer>

      <CardImage image={image}>
        <LikeButton
          value={articul}
          onClick={addToList('inWishlist')}
        >
          <LikeIcon className={inWishlist ? "active" : ""} />
        </LikeButton>
      </CardImage>


      <ContentWrapper>

        <ContentItem>
          <CardName>
            {name}
          </CardName>
          <CardSize>
            {size}
            <span>г.</span>
          </CardSize>
        </ContentItem>

        <CardDescription>
          {shortDescription}
        </CardDescription>

        <ContentItem>
          <CardPrice>
            {prise}
            <Hrn fz={26} fw={300} />
          </CardPrice>

          <ActionButton
            value={articul}
            onClick={addToList('inCart')}
          >
            <CartIcon className={inCart ? "active" : ""} />
            {inCart ? "у кошику":"у кошик"}
          </ActionButton>
        </ContentItem>

      </ContentWrapper>

    </CardContainer>
  )
}

export default Card