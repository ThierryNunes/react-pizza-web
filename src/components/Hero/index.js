import React, { useState} from 'react';
import Navbar from '../Navbar';
import { Sidebar } from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Melhor Pizza de todas</HeroH1>
          <HeroP>Pronta em 1 minuto</HeroP>
          <HeroBtn>Peça a sua</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}
