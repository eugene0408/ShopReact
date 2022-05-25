import { motion } from "framer-motion";
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
    <motion.div 
      style={{
        marginTop: "3rem", 
        width: "100%", 
        minHeight: "75vh"
      }}
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >

      {wishList.length === 0 && <IsEmpty text={'Список порожній'} />}

      <Container>
          <Row>
            
                {wishList.map((good) => (
                  <Col
                    md={6} 
                    xl={4}
                    xxl={3}
                    key={good.articul}
                    style={{
                      marginBottom: "1rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
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
                    />
                  </Col>
                ))}
        </Row>
      </Container>
    </motion.div>
  )
}

export default WishList