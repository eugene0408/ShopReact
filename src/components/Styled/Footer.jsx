import styled from 'styled-components'

export const Footer = styled.footer`
  background: var(--card-bg);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
`
export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SocialLink = styled.a.attrs({
  target: '_blank',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 768px){
    &:hover svg * {
      fill: var(--orange);
    }
  }
  & svg {
    height: 28px;
    widht: 28px;
    margin: 0 .25rem;
    & * {
      fill: var(--text-col);
    }
  }
`
export const Copyright = styled.span`
  font-size: 16px;
  margin-top: 2rem;
`