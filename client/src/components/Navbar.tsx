import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div``;

const StyledNavLink = styled(NavLink)`
  text-decoration: 0;
`;

const BookButton = styled.button`
  border: 0;
  background-color: #f9b698;
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/services">Services</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
      <BookButton>Book Now</BookButton>
    </NavbarContainer>
  );
};
