import styled from "styled-components";
import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { HamburgerMenu } from "./HamburgerMenu";

interface HeaderProps {
  setIsHamburgerOpen: Dispatch<SetStateAction<boolean>>;
  setIsAppointmentOpen: Dispatch<SetStateAction<boolean>>;
}

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 9998;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  /* laptop & desktop padding */
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    padding: 0rem 6rem;
  }
`;

const StoreInfoContainer = styled.div`
  position:relative;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 9998;
  color: #9a9a9a;
  /* laptop & desktop padding */
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    padding: 0rem 6rem;
  }
`;


const StoreInfoText = styled.p`
  padding: 1rem;
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

export const Header = ({
  setIsHamburgerOpen,
  setIsAppointmentOpen,
}: HeaderProps) => {
  return (
    <>
      {/* Non-sticky part */}
      <StoreInfoContainer>
        <StoreInfoText>
          Mon - Fri 9:30AM - 7:00PM / Saturday 9:00AM - 6PM
        </StoreInfoText>
        <StoreInfoLink href="Tel: 6103284340">(610) 328-4340</StoreInfoLink>
        <StoreInfoText>407 Baltimore Pike, Morton, PA 19070</StoreInfoText>
      </StoreInfoContainer>

      {/* Sticky navbar */}
      <StickyContainer>
        <NavbarContainer>
          <HamburgerMenu setIsHamburgerOpen={setIsHamburgerOpen} />
          <StoreLogo to={"/"}>ELEGANT NAILS & SPA</StoreLogo>
          <Navbar setIsAppointmentOpen={setIsAppointmentOpen} />
        </NavbarContainer>
      </StickyContainer>
    </>
  );
};
