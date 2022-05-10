import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`
const Item = styled.a`
  font-size: 16px;
  padding: .25rem;
  cursor: pointer;
  color: ${props => props.active ? "black": "var(--text-col)"};
  background: ${props => props.active ? "var(--orange)": "transparent"}
`


const Pagination = ({cardsPerPage, totalCards, curPage, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++){
    pageNumbers.push(i)
  }


  return (
    <Wrapper>
      {pageNumbers.map(number => (
        <Item 
          key={number}
          onClick={() => paginate(number)}
          active={number === curPage ? true : false}
        >
          {number}
        </Item>
      ))}
    </Wrapper>
  )
}

export default Pagination