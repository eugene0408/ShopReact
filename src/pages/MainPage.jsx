import styled from "styled-components"
// Router
import { Link } from "react-router-dom";
// Grid
import { Col, Container, Row } from "react-grid-system";
// Images
import background from '../assets/forest.jpg';
import {ReactComponent as HeartIcon} from '../assets/heart_icon.svg';
// Components
import Card from '../components/Card/Card';
import {CategorySelect} from '../components/CategorySelect'
import Description from "./Description";



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
const TopWrapper = styled.div`
  position: fixed;
  top: 3.5rem;
  width: 100%;
  z-index: 5;
`
const TopContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & a {
      text-decoration: none;
      color: var(--text-col)
  }
`

const WishLink = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 6rem;
  height: 100%;
  background: var(--card-bg);
  border-radius: .8rem;
  padding-left: .5rem;
  & svg {
    height: 1.5rem;
    margin-right: .8rem;
  }
  & svg path{
    fill: var(--text-col);
  }
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
  addToList,
  categories,
  selectedCategory,
  setSelectedCategory
}) => {

  return (
    <div className='MainPage' style={{position: "relative"}}>

            <TopWrapper>
              <TopContainer>

                {/*----- Category Select ---------*/}  
                <CategorySelect 
                  options={categories}
                  onChange={e => setSelectedCategory(e.value)}
                  defaultValue={categories[0]}
                  value={categories[categories.findIndex(el => el.value == selectedCategory)]}
                  isSearchable={false}
                />

                {/*------- Wishlist Link ---------*/}
                <Link to={'wishlist'}>
                  <WishLink>
                    <HeartIcon />
                    <span>Обране</span>
                  </WishLink>
                </Link>

              </TopContainer>
            </TopWrapper>

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
                    fullDescription={good.fullDescription}
                    articul={good.articul}
                    inWishlist={good.inWishlist}
                    inCart={good.inCart}
                    addToList={addToList}
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