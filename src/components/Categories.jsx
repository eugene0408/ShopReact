import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

export const Categories = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      width: '10rem',
      borderRadius: '.8rem',
      background: 'var(--card-bg)',
      color: '#fff',
      border: 'none',
      fontSize: '16px',
      boxShadow: 'none'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff'
    }), 
    menu: (provided) => ({
      ...provided,
      width: '10rem',
      background: 'var(--card-bg)',
      borderRadius: '.8rem',
      color: '#fff',
      overflow: 'hidden'
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '.2rem',
      background: state.isSelected ? 'var(--orange)' : 'transparent'
    }),
  },
})``;





