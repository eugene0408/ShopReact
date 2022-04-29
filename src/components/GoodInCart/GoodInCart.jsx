import React from 'react';
import {ReactComponent as TrashIcon} from '../../assets/trash.svg';
import Hrn from '../Hrn';
// Styles
import './GoodInCart.css'

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

  // Delete items
  const delButtonHandler = (e)=> {
    let goodsList = goods;
    let goodIndex = goodsList.findIndex((good => good.articul == e.currentTarget.value));
    goodsList[goodIndex].inCart = false;
    goodsList[goodIndex].amount = 1;
    setGoods([...goodsList]);
  }

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
    <div className='GoodInCart'>

        <div className='good-image' style={{backgroundImage: `url(${image})`}}>
        </div>

        <div className='good-content'>

            <button 
                className='delete-button' 
                value={articul}
                onClick={delButtonHandler}
            >
                <TrashIcon />
            </button>

            <div className='good-content-name'>
                <h2 
                    style={{
                    fontWeight: '700',
                    fontSize: '18px',
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



            <div className='good-content-prise'>
                <div className='good-content-prise__item'>
                    <span className='title'>Ціна:</span>

                    <p 
                        style={{
                        fontWeight: "700",
                        fontSize: "24px"
                        }}
                    >

                        {price}

                        <Hrn styles={{
                            fontSize: '18px',
                            fontWeight: '300'
                        }} />

                    </p>

                </div>


                <div className='good-content-prise__item'>
                    <span className='title'>Кількість:</span>

                    <button 
                        className='count-button' 
                        value={articul}
                        onClick={minusButtonHandler}
                    >
                        <span>-</span>
                    </button>

                    <p style={{
                        fontSize: '24px',
                        margin: '0 .5rem'
                        }}>
                        {amount}
                    </p>

                    <button 
                        className='count-button'
                        value={articul}
                        onClick={plusButtonHandler}
                    >
                        <span>+</span>
                    </button>

                </div>

                <div className='good-content-prise__item'>
                    <span className='title'>Сума:</span>

                    <p
                        style={{
                        fontWeight: "700",
                        fontSize: "24px"
                        }}
                    >
                        {total}

                        <Hrn styles={{
                            fontSize: '18px',
                            fontWeight: '300'
                        }}/>

                    </p>

                </div>


            </div>           

        </div>
    </div>
  )
}

export default GoodInCart