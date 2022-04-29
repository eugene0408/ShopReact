// Grid
import { Col, Container, Row } from "react-grid-system";
// Images
import background from '../../assets/forest.jpg';
// Components
import DarkCover from '../../components/DarkCover';
import Card from '../../components/Card/Card';
import FilterButton from '../../components/FilterButton/FilterButton';
import Categories from '../../data/categories.json'
// Styles
import './MainPage.css';



const MainPage = ({
  filteredGoods,
  selectedCategory,
  setSelectedCategory,
  goods,
  setGoods
}) => {

  return (
    <div className='MainPage'>

    <header 
      className='header'
      style={{ backgroundImage: `url(${background})` }}
    >
      <DarkCover/>
      <Container>
        <Row>
          <Col>
            <h1>100% натуральні продукти на основі трав</h1>
          </Col>
        </Row>
      </Container>
    </header>



      
      <div className="catalog">



        {/* Categories */}


        <div className='categories-container'>
          <Container>
            <Row>
              <Col debug>
                { Categories.map((category)=>(
      
                  <FilterButton 
                    title={category.title}
                    category={category.id}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    key={category.id}
                  />

                ))}
              </Col>
            </Row>
          </Container>

        </div>



        {/* Goods list */}
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


      

      </div>
        
       
    </div>
  )
}


export default MainPage