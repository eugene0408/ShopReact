import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
const ErrorNumber = styled.h3`
  font-size: 32px;
  font-weigth: 700;
  color: var(--orange);
`

const NotFound = () => {
  return (
    <Wrapper>
      <ErrorNumber>404</ErrorNumber>
      <h2>Сторінка не існує</h2>
    </Wrapper>
  )
}

export default NotFound