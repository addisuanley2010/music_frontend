import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #2c3e50;

  color: white;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  opacity  :0.9 ;
  overflow-x: auto;
  border-radius: 5px;
  




position: fixed;
top: 0px;
right: 5px;
left: 5px;
bottom: 90%;
z-index: 1;
opacity: 1;
    



    @media (max-width: 768px) {
      
border-radius: 4px;
padding: 10px;

position: fixed;
top: 0px;
right: 5px;
left: 5px;
z-index: 1;
opacity: 1;
    }
  
`;
export const MobileView = styled.button`

display: none;
@media (max-width: 768px) {
      display: block;
      background-color: #1A1B23 ;
      border: none;
      cursor: pointer;
      svg {
    color: white;
    font-size: 30px;

  }
    }


`
export const StyledNav = styled.nav`
display: flex;
list-style: none;

  li {
    margin:10px 20px;
border-radius:5px;
padding-left: 10px;
padding-right: 10px;
padding-top: 5px;
padding-bottom: 5px;
  &:hover {
      background-color: #045B92;
    }
   

  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.5s;
   
   
  }
   @media (max-width: 768px) {
      display: none;
    }

`
export const StyledIcon = styled.span`
  margin-right: 10px;
`;

export const NavText = styled.span`
  font-size: 20px;
`;


export const Adda = styled.span`
display: flex;
justify-content: center;
align-items: center;
`;
