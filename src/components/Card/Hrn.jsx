import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.span`
  font-size: ${props => props.fz}px;
  font-weight: ${props => props.fw};
`

const Hrn = ({fz, fw}) => {
  return (
    <IconWrapper fz={fz} fw={fw}>
        ₴
    </IconWrapper>
  )
}

export default Hrn