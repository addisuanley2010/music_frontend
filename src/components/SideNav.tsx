import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleSideNav } from '../redux/features/sideNavSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';

const SideNavContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f2f2f2;
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 10%;
  }
`;

const SideNavContent = styled.div`
  padding: 20px;
`;

const NavItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  &:hover{
        background-color: #0B48A3;
        color:white
  }
`;

const NavText = styled.span`
  font-size: 20px;
  margin-left: 10px;
    margin-top: 10px;

  
`;

const NavIcon = styled.span`
  font-size: 20px;
      margin-top: 10px;

`;

const SideNav: React.FC = () => {
  const dispatch = useDispatch();
  const isSideNavOpen: boolean = useSelector(
    (state: RootState) => state.sideNav.isOpen
  );

  const handleToggleSideNav = () => {
    dispatch(toggleSideNav());
  };

  if (isSideNavOpen) {
    return (
      <SideNavContainer>
        <SideNavContent>
          <NavItem onClick={handleToggleSideNav}>
            <NavLink to="/">
              <NavIcon>
                <FaHome />
              </NavIcon>
              <NavText>Home</NavText>
            </NavLink>
          </NavItem>
          <NavItem onClick={handleToggleSideNav}>
            <NavLink to="/statistics">
              <NavIcon>
                <ImStatsDots />
              </NavIcon>
              <NavText>Statistics</NavText>
            </NavLink>
          </NavItem>
        </SideNavContent>
      </SideNavContainer>
    );
  } else {
    return <></>;
  }
};

export default SideNav;