import React from 'react';
import styled from 'styled-components';

export const CartButton = styled.div`
  position: relative;
  background: var(--card-bg);
  border-radius: 50%;
  box-shadow: var(--card-shadow);
  height: 2.8rem;
  width: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    height: 1rem;
  }
  & svg path{
    fill: var(--text-col);
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
  color: black;
`

export const BackButton = styled(CartButton)`
  margin-top: .7rem;
`
export const BottomNavContiner = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 4;
  display: flex;
  flex-direction: column;
`
