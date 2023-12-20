import styled from "styled-components";

const Nav = styled.nav`
    display : flex ;

    top: 0;
    width : 100% ;
    height : 60px ;
    background-color : black ;
    color : white ;
    margin : 0;
`
const UL = styled.ul`
    display : flex ;
    list-style : none;
`
const LI = styled.li`
margin-right : 10px ;
font-weight: bold;
`
const ShopButton = styled.button`
padding : 8px ;
width : 130px ;

position: absolute ; 
right : 10px ;
top : 10px;
`


const Main = styled.div`
width : 100%;
height : 400px;
font-weight: bold;
color : #fff;
background-color : Black ;
display : flex;
flex-direction : row;
align-items: center;
justify-content: center;
margin:auto;
`
const Titre = styled.h1`    
    font-weight : 90px
`
const Description = styled`
color : gray ;

`






export  {Nav,UL,LI,ShopButton,Main,Description,Titre } ;