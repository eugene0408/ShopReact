import React, {useState} from 'react';
import { Col, Row, Container } from 'react-grid-system';
import styled  from 'styled-components';
// Components
import IsEmpty from '../components/IsEmpty';
import Hrn from '../components/Card/Hrn';
import GoodInCart from '../components/Card/GoodInCart';

// Styles
const CartHeader = styled.h2`
  margin-top: 4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`
const TotalValue = styled.p`
  font-size: 28px;
  font-weight: 600;
`

const Cart = ({
  goods,
  setGoods,
  goodsInCart
}) => {

  let total = 0
  const calculateTotal = () => {
    goodsInCart.forEach(el => {
      total += (el.amount * el.price)
    })
  }
  calculateTotal()

  return (
    <div style={{ minHeight: "75vh" }} >

      {goodsInCart.length === 0 && <IsEmpty text={'Кошик порожній'}/>}

      {goodsInCart.length >= 1 &&
        <>
          <Container>
            <Row>
              <Col md={8} lg={6} offset={{md: 2, lg: 3}}>
                <CartHeader>
                  Товари у кошику:
                </CartHeader>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              { goodsInCart.map((good)=> (
                <Col 
                  md={8}
                  lg={6}
                  offset={{md: 2, lg: 3}}
                  style={{marginBottom: '1rem'}}
                  key={good.articul}
                >

                  <GoodInCart 
                    articul={good.articul}
                    name={good.name}
                    image={good.image}
                    size={good.size}
                    price={good.price} 
                    inCart={good.inCart}
                    amount={good.amount}
                    total={good.amount * Number(good.price)}
                    goods={goods}
                    setGoods={setGoods}
                    goodsInCart={goodsInCart}
                  />


                </Col>
              ))}
            </Row>
          </Container>

          <Container>
            <Row>
              <Col 
                style={{
                  display: 'flex',
                  justifyContent: 'end'
                }}
                md={8}
                lg={6}
                offset={{md: 2, lg: 3}}
              >
                <div>
                  <h2>Всього<span style={{color: 'var(--orange)'}}>:</span></h2>
                  <TotalValue>
                    {total}
                    <Hrn fz={18} fw={300} />
                  </TotalValue>
                </div>
              </Col>
            </Row>
          </Container>
 

        </>
      
      }

    </div>
  )
}

export default Cart