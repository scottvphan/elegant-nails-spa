import styled from "styled-components";
import { Navbar } from "./Navbar";

const HeaderContainer = styled.div``;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StoreInfoContainer = styled.div`
  background-color: #eff5ff;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StoreInfoText = styled.p`
  color: black;
`;

const StoreInfoLink = styled.a``;

const StoreLogo = styled.p``;

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
        <StoreLogo>ELEGANT NAILS & SPA</StoreLogo>
        <Navbar />
      </NavbarContainer>
    </HeaderContainer>
  );
};
