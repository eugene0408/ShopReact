import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import { motion } from 'framer-motion'
// Router
import { useParams } from 'react-router-dom'
// Components
import { LikeButton, DescrActionButton } from '../components/Styled/Buttons'
import {ReactComponent as LikeIcon} from '../assets/heart_icon.svg'
import {ReactComponent as CartIcon} from '../assets/cart.svg'
import Hrn from '../components/Card/Hrn'


const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
`
const Header = styled.h2`
    font-size: 36px;
    text-transform: uppercase;
`
const Image = styled.div`
  background-image: url(${props => props.image});
  position: relative;
  background-size: cover;
  background-position: center center;
  border-radius: 1rem;
  height: 15rem;
  width: 100%;
  margin-top: 2rem;
  @media (min-width: 768px){
    height: 20rem;
    width: 70%;
  }
`

const GoodDescription = styled.p`
  widhth: 100%;
  margin-top: 2rem;
  margin-bottom: 3rem;
  white-space: pre-wrap;
`
const PropertiesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const PropertiesItem = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-of-type(2){
    font-weight: 700;
  }
`
const ItemTitle = styled.span`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 300;
  & span {
    color: var(--orange)
  }
`
const ItemValue = styled.span`
  font-size: 32px;
`

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`




const Description = ({
  goods,
  setGoods,
  addToList
}) => {
  const {id} = useParams();
  const curIndex = goods.findIndex(el => el.articul === id);
  const curGood = goods[curIndex];

  return (
    <Wrapper
      as={motion.div}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0, transition: {duration: 0.2}}}
    >
      <Container>
        <Row justify='center'>
          <Col md={6}>
            <Header>
              {curGood.name}
            </Header>
            <Image image={curGood.image}>
              <LikeButton
                value={id}
                onClick={addToList('inWishlist')}
              >
                <LikeIcon className={curGood.inWishlist ? "active" : ""}/>
              </LikeButton>
            </Image>

            <GoodDescription>
              {curGood.description}
            </GoodDescription>

            <PropertiesWrapper>

              <PropertiesItem>
                <ItemTitle> Об'єм <span>/</span> Вага <span>:</span></ItemTitle>
                <ItemValue>
                  {curGood.size} г.
                </ItemValue>
              </PropertiesItem>

              <PropertiesItem>
                <ItemTitle>
                  Ціна<span>:</span>
                </ItemTitle>
                <ItemValue>
                  {curGood.price}
                  <Hrn fz={26} fw={300} />
                </ItemValue>
              </PropertiesItem>
              
            </PropertiesWrapper>

            <ButtonWrapper>
              <DescrActionButton
                value={id}
                onClick={addToList('inCart')}
              >
                <CartIcon className={curGood.inCart ? "active" : ""} />
                {curGood.inCart ? "у кошику":"у кошик"}
              </DescrActionButton>
            </ButtonWrapper>

          </Col>
        </Row>
      </Container>
    </Wrapper>
        
    
  )
}

export default Description