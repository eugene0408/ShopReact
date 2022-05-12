import styled from 'styled-components';
import { Container } from 'react-grid-system';

export const ToplineWrapper = styled.div`
    position: sticky;
    top: 0;
    background: var(--card-bg);
    z-index: 10;
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
    height: 3rem;
    width: 100%;  
    padding: 0 .8rem;
    border-radius: .5rem;
    padding: 0;
`

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 45px;
    & svg {
        height: 70%;
        width: auto;
    }
    & svg  path {
        fill: var(--text-col);
    }
    & svg ellipse {
        stroke: var(--text-col);
    }
    & svg #pines{
        fill: #43a047;
    }
`

