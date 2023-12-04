import styled from "styled-components";
import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";
import { MobileNavbar } from "./MobileNavbar";

const HeaderContainer = styled.div``;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:768px) {
    /* justify-content: ; */
  }
`;

const StoreInfoContainer = styled.div`
  background-color: #eff5ff;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #9a9a9a;
`;

const StoreInfoText = styled.p`
  padding: 0.5rem;
`;

const StoreInfoLink = styled.a`
  text-decoration: 0;
  color: #9a9a9a;
`;

const StoreLogo = styled(NavLink)`
  text-decoration: none;
  font-size: 2rem;
  color: black;
`;
const HamburgerMenu = styled.svg`
  display: none;
  @media screen and (max-width:768px) {
    display:block;
  }
`
export const Header = () => {
  return (
    <HeaderContainer>
      {/* Displays store information */}
      <StoreInfoContainer>
        <StoreInfoText>
          Mon - Fri 9:30AM - 7:00PM / Saturday 9:00AM - 6PM
        </StoreInfoText>
        <StoreInfoLink href="Tel: 6103284340">(610) 328-4340</StoreInfoLink>
        <StoreInfoText>407 Baltimore Pike, Morton, PA 19070</StoreInfoText>
      </StoreInfoContainer>

      {/* Navbar */}
      <NavbarContainer>
        <HamburgerMenu
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
        >
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
        </HamburgerMenu>
        <StoreLogo to={"/"}>ELEGANT NAILS & SPA</StoreLogo>
        <Navbar />
        <MobileNavbar />
      </NavbarContainer>
    </HeaderContainer>
  );
};
