import React from 'react'
import { 
  SidebarContainer, 
  Icon,
  CloseIcon, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap, 
  SidebarRoute 
} from './SidebarElements';

export const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />        
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Sobremesas</SidebarLink>
        <SidebarLink to="/">Menu Completo</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Peça Agora</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}
