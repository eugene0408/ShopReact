import styled from 'styled-components';
import { Container } from 'react-grid-system';

export const ToplineWrapper = styled.div`
    position: fixed;
    top: .5rem;
    z-index: 3;
    width: 100%;
`

export const ToplineContainer = styled(Container)`
    display: flex;
    justify-content: center;
`

export const ToplineNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 2.5rem;
    width: 100%;
    background: var(--card-bg);
    padding: 0 .8rem;
    border-radius: .5rem;
`

export const ToplineButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 45px;
    & svg {
        height: 80%;
        width: auto;
    }
    & svg  path {
        fill: var(--text-col);
    }
`

export const TopWrapper = styled.div`
  position: fixed;
  top: 3.5rem;
  width: 100%;
  z-index: 5;
`
export const TopContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & a {
      text-decoration: none;
      color: var(--text-col)
  }
`

export const WishLink = styled.div`
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
    fill: white;
  }
`