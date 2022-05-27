import styled from "styled-components";
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
import { FavIndicator } from "../components/Styled/Buttons";

// Styled Components: 
const DarkCover = styled.div`
  background: var(--header-dark-cover);
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
  height: 2.8rem;
  & a {
      text-decoration: none;
      color: var(--text-col)
  }
`

const WishLink = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 7rem;
  height: 100%;
  background: var(--card-bg);
  border-radius: .5rem;
  padding-left: .5rem;
  box-shadow: var(--card-shadow);
  & svg {
    height: 1.5rem;
    margin-right: .5rem;
  }
  & svg path{
    fill: var(--icons-fill);
  }
  & span {
    position: relative;
    padding-left: .8rem;
    line-height: 1.8;
  }
  & span::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 1px;
    box-sizing: border-box;
    background: var(--text-col);
    opacity: .4;
    
  }
`

const Header = styled.header`
  background-image: url(${props => props.background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 20rem;
  width: 20rem;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--card-shadow);
`
const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  z-index: 2;
  padding-left: .5rem;
  line-height: 1.2;
  text-align: center;
`
const TitleNumber = styled.h2`
  font-size: 65px;
  font-weight: 800; 
  border-bottom: 1px solid var(--orange)
`

const TitleText = styled.p`
  font-size: 22px;
  line-height: 1.1;
`

const CatalogWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 4rem;
  z-index: 2;
`


const MainPage = ({
  filteredGoods,
  addToList,
  categories,
  selectedCategory,
  setSelectedCategory,
  wishList,
  curPage,
  setCurPage
}) => {

  // Pagination
  const cardsPerPage = 12;

  // Get current cards
  const indexOfLastCard = curPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const curGoods = filteredGoods.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = pageNumber => setCurPage(pageNumber);

  // Wish list has items indicator
  const wishlistHasItems = () => wishList.length >= 1 ? true : false;
  wishlistHasItems();

  return (
    <div style={{position: "relative"}}>

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
              {wishlistHasItems() &&
                <FavIndicator/>
              }  
              <span>Обране</span>
            </WishLink>
          </Link>

        </TopContainer>
      </TopWrapper>

      {/* --------- Header display only on first page ----- */}
      { curPage <= 1 &&
        <Wrapper>
         <Header background={background}>
           <DarkCover/>
           <HeaderTitle>
             <TitleNumber>100%</TitleNumber>
             <TitleText>натуральні продукти <br/> на основі трав</TitleText>
           </HeaderTitle>
         </Header>
       </Wrapper>
      }
     

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