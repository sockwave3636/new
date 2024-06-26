import React from 'react'
import styled from 'styled-components'
import Header from './Navbar'
import Home from './Home'


function Dashboard() {
  return (
    <Container>
       <Home />
    </Container>
  )
}

export default Dashboard


const Container = styled.main`
min-height :calc(100vh - 70px);
padding: 0 calc(0.5vw + 5px);
    position : relative;
    overflow-x:hidden;
    &:before{
      background : url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top:0;
       left:0;
        right:0;
        bottom:0;
        z-index: -1;
     }
`