import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ServicesContainer = styled.div`
  position: relative;
`;

const ServicesDropdown = styled.div`
  position: absolute;
  padding: 1rem;
  background-color: #e3e3e3;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  color: #323232;
  text-decoration: 0;
  padding: 0.3125rem 1.375rem;

  &:hover {
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

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <DropdownItem to={"/services#manicure"}>
            PEDICURE
          </DropdownItem>
          <DropdownItem to={"/services#kid-services"}>
            KID SERVICES
          </DropdownItem>
          <DropdownItem to={"/services#bosy-waxing"}>
            BODY WAXING
          </DropdownItem>
          <DropdownItem to={"/services#additional-services"}>
            ADDITIONAL SERVICES
          </DropdownItem>
        </ServicesDropdown>
      </ServicesContainer>
      <StyledNavLink to="/contact">CONTACT</StyledNavLink>
      <BookButton>BOOK NOW</BookButton>
    </NavbarContainer>
  );
};
