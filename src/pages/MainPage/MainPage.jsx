import styled from "styled-components"
// Grid
import { Col, Container, Row } from "react-grid-system";
// Images
import background from '../../assets/forest.jpg';
import {ReactComponent as HeartIcon} from '../../assets/heart_icon.svg';
// Components
import Card from '../../components/Card/Card';



// Styled Components: 
const DarkCover = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  inset: 0;
  border-radius: 50%;
  z-index: 1;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Header = styled.header`
  background-image: url(${props => props.background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 50%;
  margin-top: 8rem;
  height: 280px;
  width: 280px;
`
const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  z-index: 2;
  height: 100%;
  width: 130%;
  transform: translateX(-50%);

`
const TitleNumber = styled.h2`
  width: 50%;
  font-size: 65px;
  font-weight: 800;
  padding-right: 1rem;
`

const TitleText = styled.p`
  font-size: 21px;
  width: 50%;
  border-left: 1px solid white;
  padding-left: 1rem;
`

const CatalogWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 10rem;
  z-index: 2;
`

const MainPage = ({
  filteredGoods,
  goods,
  setGoods
}) => {

  return (
    <div className='MainPage'>

      

      <Container>
        <Wrapper>

          <Header background={background}>
            <DarkCover/>
            <HeaderTitle>
              <TitleNumber>100%</TitleNumber>
              <TitleText>натуральні продукти на основі трав</TitleText>
            </HeaderTitle>
          </Header>

        </Wrapper>
      </Container>



      {/* 
      ----------  Goods list ----------------
      */}
      <CatalogWrapper>
        <Container>
          <Row>

            { filteredGoods.map((good)=> (
              <Col 
                md={6} 
                xl={4}
                xxl={3} 
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                key={good.articul}
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
                  goods={goods}
                  setGoods={setGoods}
                />
              </Col>
            ))}

          </Row>
        </Container>
      </CatalogWrapper>
      



    </div>
  )
}


export default MainPage