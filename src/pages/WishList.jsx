// Grid
import { Col, Container, Row } from "react-grid-system";
// Components
import Card from '../components/Card/Card';
import IsEmpty from "../components/IsEmpty";



const WishList = ({
  goods,
  setGoods,
  wishList,
  addToList
}) => {

  return (
    <div style={{marginTop: "3rem", width: "100%"}}>

      {wishList.length === 0 && <IsEmpty text={'Список порожній'} />}

      <Container>
          <Row>
            <Col>
                {wishList.map((good) => (
                  
                    <Card 
                      category={good.category}
                      name={good.name}
                      image={good.image}
                      size={good.size}
                      prise={good.price}
                      shortDescription={good.shortDescription}
                      description={good.description}
                      articul={good.articul}
                      inWishlist={good.inWishlist}
                      inCart={good.inCart}
                      addToList={addToList}
                      goods={goods}
                      setGoods={setGoods}
                      key={good.articul}
                    />
                ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WishList