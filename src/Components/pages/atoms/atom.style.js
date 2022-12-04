import styled from "styled-components";
import Top from "../../../assets/top.svg"


const WrapperStyle = styled.div`
max-width: 504px; // BB passport
max-height:786px; // 	Xiaomi Redmi Note 5
width:425px;
height: 100vh;
padding: 3.38em 2.38em;
box-shadow: 4px 6px 20px rgba(10, 118, 245, 0.25);
margin: auto;
border-radius: 1.5rem;
background: ${props => props.registration ? `#fff url(${Top}) no-repeat` :"#fff"};
 a{
    text-decoration: none;
 }
`

const Button = styled.button`
background: linear-gradient(270deg, #63A1FF 0%, #0A76F5 100%);
box-shadow: 4px 6px 20px rgba(10, 118, 245, 0.25);
border-radius: 5px;
padding: 1.25rem;
width: 13.5rem;
font-size: 1.1875em;
color: #fff;
border-style: none;
cursor: pointer;
position: relative;
margin: 0 auto ;

&:before{
    content:"";
    position: absolute;
    width: 0%;
    height:100%;
    background: rgba(10, 118, 245, .2);
    top:0;
    left:0;
    z-index:10;
    transition: all 0.5s;
}
&:hover:before{
    width: 100%;
}
`

const Image = styled.img`
width: 100%;
/* background: #fff; */
`



export {WrapperStyle, Button, Image}