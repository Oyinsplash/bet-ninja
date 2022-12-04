import React from 'react'
import { WrapperStyle } from './atom.style'

const Wrapper = ({children}) => {
  return (
    <WrapperStyle>{children}</WrapperStyle>
  )
}

export default Wrapper