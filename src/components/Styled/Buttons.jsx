import React from 'react';
import styled from 'styled-components';

// Side Navigation Buttons
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

export const FavIndicator = styled.div`
  position: absolute;
  background: var(--orange);
  border-radius: 50%;
  left: 1.5rem;
  bottom: .6rem;
  height: .7rem;
  width: .7rem;

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

// Card buttons
export const CardActionButton = styled.button`
  font-family: 'Oswald', 'Oswald2', serif;
  color: var(--text-col);
  font-weight: 600;
  text-transform: uppercase;
  line-height: 28px;
  background: var(--card-bg);
  border: none;
  border-radius: .8rem;
  box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.2);;
  width: 8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 4;
  @media (min-width: 768px){
    &:hover svg path{
      fill: var(--orange);
    } 
  }
  & svg {
    height: 28px;
    margin-right: .5rem;
  }
  & svg * {
    fill: var(--icons-fill);
    transition: .3s ease;
  }
  & .active * {
    fill: var(--orange);
  }
`
// Cart button on description page
export const DescrActionButton = styled(CardActionButton)`
  height: 3rem;
  width: 10rem;
`

export const LikeButton = styled.button`
  position: absolute;
  top: .5rem;
  right: .5em;
  background: transparent;
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  cursor: pointer;
  & svg path {
    fill: var(--like-btn-fill);
    stroke: black;
    stroke-width: 4;
  }
  & .active path {
    fill: var(--orange);
  }
`

export const ThemeSwitch = styled.button`
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    height: 28px;
  }
  & svg path {
    fill: var(--orange);
  }
`