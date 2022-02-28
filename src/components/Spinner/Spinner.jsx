import React from 'react'
import {LoadingSpinnerWrapper, LoadingSpiner, SpinnerDiv, SpinnerDivTwo } from '../styles/globalstyles'

const Spinner = () => {
  return (
    <LoadingSpinnerWrapper>
    <LoadingSpiner>
            <SpinnerDiv>  
            </SpinnerDiv>

            <SpinnerDivTwo>
            </SpinnerDivTwo>
    </LoadingSpiner>
    Loading
    </LoadingSpinnerWrapper>
  )
}

export default Spinner