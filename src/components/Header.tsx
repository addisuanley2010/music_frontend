import { Link, useLocation } from "react-router-dom";
import {
  Adda,
  HeaderStyle,
  MobileView,
  NavText,
  StyledIcon,
  StyledNav,
} from "../styles/Header.style";
import { FaBars, FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "../redux/features/sideNavSlice";

import { useEffect, useState } from "react";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleToggleSideNav = () => {
    dispatch(toggleSideNav());
  };

  const navItems = [
    { to: "/", icon: FaHome, text: "Home" },
    { to: "/statistics", icon: ImStatsDots, text: "Statistics" },
  ];

  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.to === location.pathname);
    setActiveIndex(currentIndex);
  }, [location]);

  return (
    <HeaderStyle>
      <StyledNav>
        {navItems.map((item, index) => (
          <li
            key={item.to}
            style={{
              backgroundColor: activeIndex === index ? "#045B92" : "",
            }}
          >
            <Link to={item.to}>
              <Adda>
                <StyledIcon>
                  <item.icon />
                </StyledIcon>
                <NavText>{item.text}</NavText>
              </Adda>
            </Link>
          </li>
        ))}
      </StyledNav>
      <MobileView>
        <FaBars onClick={handleToggleSideNav} />
      </MobileView>
    </HeaderStyle>
  );
};
export default Header;