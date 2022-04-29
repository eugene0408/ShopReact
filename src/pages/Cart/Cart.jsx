import React, {useState} from 'react';
import { Col, Row, Container } from 'react-grid-system';
// Components
import GoodInCart from '../../components/GoodInCart/GoodInCart';
import IsEmpty from '../../components/IsEmpty';
import Hrn from '../../components/Hrn';

const Cart = ({
  goods,
  setGoods
}) => {
  let goodsInCart = goods.filter(good => good.inCart === true);
  let total = 0
  const calculateTotal = () => {
    goodsInCart.forEach(el => {
      total += (el.amount * el.price)
    })
  }
  calculateTotal()


  return (
    <div className='Cart'>

      {goodsInCart.length === 0 && <IsEmpty text={'Кошик порожній'}/>}

      {goodsInCart.length >= 1 &&
        <>
          <Container>
            <Row>
              <Col>
                <h2 style={{
                  marginTop: '4rem',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}>
                  Товари у кошику:
                </h2>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              { goodsInCart.map((good)=> (
                <Col md={6}
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
              <Col style={{
                display: 'flex',
                justifyContent: 'end'
              }}>
                <div className='total'>
                  <h2>Всього:</h2>
                  <p style={{
                    fontSize: '28px',
                    fontWeight: '600'
                  }}>
                    {total}
                    <Hrn styles={{
                        fontSize: '18px',
                        fontWeight: '300'
                    }}/>
                  </p>
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