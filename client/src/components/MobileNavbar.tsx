import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import FacebookIcon from "../assets/logo/facebook.svg";

interface HeaderProps {
  setIsHamburgerOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavbarContainer = styled.div`
  background-color: #323232;
  color: white;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  display: none;
  height: 100vh;
  width: 100vw;
  position: fixed;
  justify-content: space-between;
  overflow-y: auto;
  z-index: 10000;

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 2rem;
  }

  transition: top 0.5s ease;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #f9b698;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const GetInTouchContainer = styled.div`
  margin: 1rem 0;
`;
const Heading = styled.h1`
  color: #fff;
  font-family: Jost;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
`;
const FacebookContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CloseButton = styled.div`
  font-weight: 400;
  font-size: 2rem;
  text-align: right;
`;
const FacebookText = styled.p`
  color: #fff;
  font-family: Jost;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
`;
const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavAddress = styled.address`
  color: #fff;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px; /* 220% */
`;
const StyledGoogleMap = styled.iframe`
  height: 100%;
  width: 100%;
`;
export const MobileNavbar = ({ setIsHamburgerOpen }: HeaderProps) => {
  const handleHamburgerMenu = () => {
    setIsHamburgerOpen((prevState) => !prevState);
  };

  return (
    <MobileNavbarContainer>
      <CloseButton onClick={handleHamburgerMenu}>x</CloseButton>
      <LinkContainer>
        <StyledNavLink onClick={handleHamburgerMenu} to="/">
          Home
        </StyledNavLink>
        <StyledNavLink onClick={handleHamburgerMenu} to="/services">
          Services
        </StyledNavLink>
        <StyledNavLink onClick={handleHamburgerMenu} to="/contact">
          Contact
        </StyledNavLink>
      </LinkContainer>
      <GetInTouchContainer>
        <Heading>GET IN TOUCH</Heading>
        <FacebookContainer>
          <img style={{ width: "2rem" }} src={FacebookIcon} />
          <FacebookText>Facebook</FacebookText>
        </FacebookContainer>
      </GetInTouchContainer>
      <LocationContainer>
        <NavAddress>
          407 Baltimore Pike <br />
          Morton, PA 19070 <br />
          elegantnails19070@gmail.com <br />
          (610) 238-4340 <br />
        </NavAddress>
      </LocationContainer>
      <Heading>Find us here</Heading>
      <StyledGoogleMap
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrby6QnLCxokRcMXea-IIlVk&key=AIzaSyBBW2F1HMcu3yJ1wG2sHo4eRoelcb2jlVY"
      ></StyledGoogleMap>
    </MobileNavbarContainer>
  );
};
