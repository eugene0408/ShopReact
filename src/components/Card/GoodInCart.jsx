import React from 'react';
import styled from 'styled-components';
// Icons
import {ReactComponent as TrashIcon} from '../../assets/trash.svg';
import {ReactComponent as PlusIcon} from '../../assets/plus.svg';
import {ReactComponent as MinusIcon} from '../../assets/minus.svg';

import Hrn from './Hrn';

// Styled Components:
const CardContainer = styled.div`
    overflow: hidden;
    border-radius: 1rem;
    background: var(--card-bg);
    display: flex;
    flex-direction: row;
    height: 8rem;
`
const CardImage = styled.div`
    background-image: url(${props => props.image});
    height: 100%;
    width: 150px;
    background-position: center center;
    background-size: cover;
`
const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 0.5rem;
`
const DeleteButton = styled.button`
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    height: 2.5rem;
    width: 2.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    & svg {
        height: 100%;
        width: 100%;
    }
    & svg path {
        fill: var(--red)
    }
`

const CardName = styled.h2`
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
`
const CardSize = styled.p`
    font-size: 16px;
    & span{
        font-size: 14px;
    }
`

const PricingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: .5rem;
`
const PricingItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding-top: 1rem;
    padding-right: 1rem;
`
const PricingItemCenter = styled(PricingItem)`
    justify-content: center;
`

const PricingTitle = styled.span`
    position: absolute; 
    top: 0;  
    width: 100%;
`
const PricingTitleCenter = styled(PricingTitle)`
    text-align: center
`
const CardPrice = styled.p`
    font-weight: 700;
    font-size: 24px;
`
const CountButton = styled.button`
    height: 1.8rem;
    width: 1.8rem;
    border: none;
    border-radius: 50%;
    color: white;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg{
        height: 100%;
        width: 100%;
    }
    & svg rect, & svg polygon {
        fill: #fff;
    }
`
const Amount = styled.p`
    font-size: 24px;
    margin: 0 .5rem;
`
const Total = styled.p`
    font-size: 24px;
    font-weight: 700;
    width: 3rem;
`



const GoodInCart = ({
    image, 
    name, 
    size, 
    price, 
    articul,
    amount,
    total,
    goods,
    setGoods
}) => {

  // Delete item from cart
  const delButtonHandler = (e)=> {
    let goodsList = goods;
    let goodIndex = goodsList.findIndex((good => good.articul == e.currentTarget.value));
    goodsList[goodIndex].inCart = false;
    goodsList[goodIndex].amount = 1;
    setGoods([...goodsList]);
  }

  // Counter Handler
  const plusButtonHandler = (e) => {
    let list = goods
    const index = list.findIndex((good => good.articul == e.currentTarget.value));
    list[index].amount += 1
    setGoods([...list])
  }

  const minusButtonHandler = (e) => {
    let list = goods
    const index = list.findIndex((good => good.articul == e.currentTarget.value));
    if(list[index].amount > 1){
        list[index].amount -= 1
    }
    setGoods([...list])
  }

  return (
    <CardContainer>

        <CardImage image={image} />

        <ContentWrapper>

            <DeleteButton
                value={articul}
                onClick={delButtonHandler}
            >
                <TrashIcon />
            </DeleteButton>

            <div>
                <CardName>
                    {name}
                </CardName>
                <CardSize>
                    {size}
                    <span>г.</span>
                </CardSize>
            </div>

            <PricingWrapper>
                <PricingItem>
                    <PricingTitle>Ціна:</PricingTitle>
                    <CardPrice>
                        {price}
                        <Hrn fz={18} fw={300}/>
                    </CardPrice>
                </PricingItem>

                <PricingItemCenter>
                    <PricingTitleCenter>Кількість:</PricingTitleCenter>

                    <CountButton
                        value={articul}
                        onClick={minusButtonHandler}
                    >
                        <MinusIcon />
                    </CountButton>

                    <Amount>
                        {amount}
                    </Amount>

                    <CountButton
                        value={articul}
                        onClick={plusButtonHandler}
                    >
                        <PlusIcon />
                    </CountButton>

                </PricingItemCenter>

                <PricingItem>
                    <PricingTitle>Сума:</PricingTitle>
                    <Total>
                        {total}
                        <Hrn fz={18} fw={300}/>
                    </Total>
                </PricingItem>

            </PricingWrapper>           
        </ContentWrapper>
    </CardContainer>
  )
}

export default GoodInCart