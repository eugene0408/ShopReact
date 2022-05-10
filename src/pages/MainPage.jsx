import { useState, useEffect } from "react";
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
import Pagination from "../components/Pagination";
import {CategorySelect} from '../components/CategorySelect';

// Styled Components: 
const DarkCover = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  inset: 0;
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
  height: 70vh;
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;
`
const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  height: 100%;

`
const TitleNumber = styled.h2`
  width: 50%;
  font-size: 60px;
  font-weight: 800;
  padding-right: .5rem;
`

const TitleText = styled.p`
  font-size: 21px;
  border-left: 1px solid white;
  padding-left: .5rem;
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

  // Pagination
  const [curPage, setCurPage] = useState(1);
  const cardsPerPage = 8;
  // Get current cards
  const indexOfLastCard = curPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const curGoods = filteredGoods.slice(indexOfFirstCard, indexOfLastCard);
  // Change page
  const paginate = pageNumber => setCurPage(pageNumber);
  // Set page to default when change category
  useEffect(() => {
    setCurPage(1);
  }, [filteredGoods])

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


      <Wrapper>

        <Header background={background}>
          <DarkCover/>
          <HeaderTitle>
            <TitleNumber>100%</TitleNumber>
            <TitleText>натуральні продукти на основі трав</TitleText>
          </HeaderTitle>
        </Header>

      </Wrapper>


      {/* 
      ----------  Goods list ----------------
      */}
      <CatalogWrapper>
        <Container>
          <Row>

            { curGoods.map((good)=> (
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
                    description={good.description}
                    articul={good.articul}
                    inWishlist={good.inWishlist}
                    inCart={good.inCart}
                    addToList={addToList}
                  />
          
              </Col>
            ))}

          </Row>
        </Container>

        {/* 
        ------------------- Pagination --------------------------- 
        */}
        <Container>
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={filteredGoods.length}
            curPage={curPage}
            paginate={paginate}
           />
        </Container>


      </CatalogWrapper>

    </div>
  )
}


export default MainPage