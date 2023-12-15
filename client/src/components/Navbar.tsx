import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

const NavbarContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  
  @media screen and (max-width:768px) {
    display: none;
  }
`;

const ServicesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ServicesDropdown = styled.div`
  position: absolute;
  padding: 1rem;
  background-color: #e3e3e3;
  flex-direction: column;
  gap: 0.5rem;
  top: 2.75rem;
`;

const StyledNavLink = styled(NavLink)`
  color: #323232;
  text-decoration: 0;
  padding: 0.3125rem 1.375rem;
  position: relative;

  &::after {
    content: "";
    color: #f9b698;
    position: absolute;
    width: 80%;
    height: 3px;
    left: 10%;
    bottom: 0;
    background-color: #f3f3f3;
    transform-origin: right;
    transition: background-color 0.5s ease-out;
  }

  &:hover::after {
    transform-origin: left;
    background-color: #f9b698;
  }

  &:hover {
    transition: color 0.5s ease-out;
    color: #f9b698;
  }
`;

const BookButton = styled.button`
  border: 0;
  color: white;
  background-color: #f9b698;
  padding: 0.3125rem 1.375rem;
`;

const DropdownItem = styled(NavLink)`
  color: black;
  text-decoration: none;

  &:hover {
    color: #f9b698;
  }
`;

interface HeaderProps {
  setIsAppointmentOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navbar = ({ setIsAppointmentOpen }: HeaderProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAppointmentModal = () => {
    setIsAppointmentOpen((prevState: boolean) => !prevState);
  };
  
  return (
    <NavbarContainer>
      <StyledNavLink to="/">HOME</StyledNavLink>
      <ServicesContainer
        onMouseOver={() => setDropdownOpen(true)}
        onMouseOut={() => setDropdownOpen(false)}
      >
        <StyledNavLink to="/services">SERVICES</StyledNavLink>
        <ServicesDropdown
          style={{ display: `${dropdownOpen ? "flex" : "none"}` }}
        >
          <DropdownItem to={"/services#manicure"}>
            MANICURE
          </DropdownItem>
          <DropdownItem to={"/services#pedicure"}>
            PEDICURE
          </DropdownItem>
          <DropdownItem to={"/services#kid-services"}>
            KID SERVICES
          </DropdownItem>
          <DropdownItem to={"/services#body-waxing"}>
            BODY WAXING
          </DropdownItem>
          <DropdownItem to={"/services#additional-services"}>
            ADDITIONAL SERVICES
          </DropdownItem>
        </ServicesDropdown>
      </ServicesContainer>
      <StyledNavLink to="/contact">CONTACT</StyledNavLink>
      <BookButton onClick={handleAppointmentModal}>BOOK NOW</BookButton>
    </NavbarContainer>
  );
};
