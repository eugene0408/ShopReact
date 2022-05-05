import React from 'react';
import styled from 'styled-components';

export const CartButton = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
  background: var(--card-bg);
  border-radius: 50%;
  border: 1px solid white;
  height: 2.8rem;
  width: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    height: 1rem;
  }
  & svg path{
    fill: white;
  }
`
export const Indicator = styled.div`
  position: absolute;
  bottom: 0;
  right: -.3rem;
  border-radius: 50%;
  background: var(--orange);
  height: 1rem;
  width: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
`

export const BackButton = styled(CartButton)`
  bottom: 4.5rem
`
