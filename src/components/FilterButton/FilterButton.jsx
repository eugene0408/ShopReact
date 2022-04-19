import './FilterButton.css'

const FilterButton = ({
  category, 
  title, 
  selectedCategory, 
  setSelectedCategory
}) => {

  const changeCategory = (e) => {
    setSelectedCategory(e.target.value)
  }


  return (
    <button 
      className={selectedCategory==category?"filter-button filter-button__active":"filter-button"}
      onClick={changeCategory}
      value={category}
    >
        {title}
    </button>
  )
}

export default FilterButton


