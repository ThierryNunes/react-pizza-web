import React from 'react'
import {
  FeatureContainer,
  FeatureButton
} from './FeatureElements';

export const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza do dia</h1>
      <p>queijo, molho de tomate, calabresa em rodelas,
      cebola, tomate picado, azeite e orégano.</p>
      <FeatureButton>Peça agora</FeatureButton>
    </FeatureContainer>
  )
}
