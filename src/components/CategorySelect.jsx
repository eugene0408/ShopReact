import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

export const CategorySelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      height: '100%',
      width: '10rem',
      borderRadius: '.5rem',
      background: 'var(--card-bg)',  
      border: 'none',
      fontSize: '16px',
      boxShadow: 'none'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--text-col)',
    }), 
    menu: (provided) => ({
      ...provided,
      width: '10rem',
      background: 'var(--card-bg)',
      borderRadius: '.8rem',
      color: 'var(--text-col)',
      overflow: 'hidden'
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '.2rem .4rem',
      background: state.isSelected ? 'var(--orange)' : 'transparent'
    }),
  },
})``;





