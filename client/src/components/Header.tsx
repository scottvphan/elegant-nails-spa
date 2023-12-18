import styled from "styled-components";
import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import CompanyLogo from "../assets/logo/company-logo.png";
import PhoneIcon from "/icons/phone.svg";
import ClockIcon from "/icons/clock.svg";
import LocationIcon from "/icons/location.svg";
import FacebookIcon from "../assets/logo/facebook.svg";

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
    padding: 2rem 6rem;
  }
`;

const StoreInfoContainer = styled.div`
  position: relative;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 9998;
  color: #9a9a9a;
  padding: 1rem;
  /* laptop & desktop padding */
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 0.5rem;
    padding: 1rem 6rem;
  }
`;

const StoreInfoText = styled.p`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ScheduleText = styled(StoreInfoText)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const LocationText = styled(StoreInfoText)`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const StoreInfoLink = styled.a`
  text-decoration: 0;
  color: #9a9a9a;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const StoreLogo = styled(NavLink)`
  text-decoration: none;
  font-size: 2rem;
  color: black;
`;

const StyledImg = styled.img`
  width: 50%;
`;

const StyledIcon = styled.img`
  width: 1.25rem;
`;

const BookButton = styled.button`
  border: 0;
  color: white;
  background-color: #f9b698;
  padding: 0.5rem 1rem;
  display:none;
  @media screen and (max-width:768px) {
    display: block;
  }
`;

export const Header = ({
  setIsHamburgerOpen,
  setIsAppointmentOpen,
}: HeaderProps) => {

  const handleAppointmentModal = () => {
    setIsAppointmentOpen((prevState: boolean) => !prevState);
  };

  return (
    <>
      {/* Non-sticky part */}
      <StoreInfoContainer>
        <ScheduleText>
          <StyledIcon src={ClockIcon} />
          Mon - Fri 9:30AM - 7:00PM / Saturday 9:00AM - 6PM
        </ScheduleText>
        <StoreInfoLink href="Tel: 6103284340">
          <StyledIcon src={PhoneIcon} />
          (610) 328-4340
        </StoreInfoLink>
        <LocationText>
          <StyledIcon src={LocationIcon} />
          407 Baltimore Pike, Morton, PA 19070
        </LocationText>
        <StyledIcon style={{ marginLeft: "auto" }} src={FacebookIcon} />
      </StoreInfoContainer>

      {/* Sticky navbar */}
      <StickyContainer>
        <NavbarContainer>
          <HamburgerMenu setIsHamburgerOpen={setIsHamburgerOpen} />
          <StoreLogo to={"/"}>
            <StyledImg src={CompanyLogo} />
          </StoreLogo>
          <Navbar setIsAppointmentOpen={setIsAppointmentOpen} />
          <BookButton onClick={handleAppointmentModal}>BOOK NOW</BookButton>
        </NavbarContainer>
      </StickyContainer>
    </>
  );
};
