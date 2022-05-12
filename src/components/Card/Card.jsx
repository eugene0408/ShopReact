// Router
import { Link } from "react-router-dom";
// Components
import styled from 'styled-components';
import { CardActionButton, LikeButton } from "../Styled/Buttons";
import {ReactComponent as CartIcon} from '../../assets/cart.svg'
import {ReactComponent as LikeIcon} from '../../assets/heart_icon.svg'
import Hrn from './Hrn'

// Styled Components
const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 360px;
  max-width: 96vw;
  background: var(--card-bg);
  border-radius: 1.5rem;
  overflow: hidden;
  z-index: 3;
  box-shadow: var(--card-shadow);
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
  white-space: nowrap;
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
  color: var(--text-col);
  & span{
    color: var(--orange);
  }
`

const CardPrice = styled.p`
  font-weight: 700;
  font-size: 32px;
`

const LinkArea = styled.div`
  position: absolute;
  top: 12%;
  bottom: 15%;
  left: 0;
  right: 0;
  z-index: 4;
`


const Card = ({
  image, 
  name, 
  size, 
  prise, 
  description,
  articul,
  inWishlist,
  inCart,
  addToList
}) => {

  const shortDescription = description.slice(0, 80)

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
            {/* Max name length 19*/}
            {name.slice(0, 19)}
          </CardName>
          <CardSize>
            {size}
            <span>г.</span>
          </CardSize>
        </ContentItem>

        <CardDescription>
          {shortDescription}
          <span>...</span>
        </CardDescription>

        <ContentItem>
          <CardPrice>
            {prise}
            <Hrn fz={26} fw={300} />
          </CardPrice>

          <CardActionButton
            value={articul}
            onClick={addToList('inCart')}
          >
            <CartIcon className={inCart ? "active" : ""} />
            {inCart ? "у кошику":"у кошик"}
          </CardActionButton>
        </ContentItem>

      </ContentWrapper>

      <Link to={`/${articul}`}>
        <LinkArea/>
      </Link> 


    </CardContainer>
  )
}

export default Card