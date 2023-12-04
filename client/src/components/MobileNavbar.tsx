import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const MobileNavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  display: none;
  @media screen and (max-width: 768px) {
    display:block;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #323232;
  text-decoration: 0;
  padding: 0.3125rem 1.375rem;

  &:hover {
    color: #f9b698;
  }
`;

const LinkContainer = styled.div``;
const GetInTouchContainer = styled.div``;
const LocationContainer = styled.div``;
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
  gap: 1rem;
`;

export const MobileNavbar = () => {
  return (
    <MobileNavbarContainer>
      <LinkContainer>
        <StyledNavLink to="/home">Home</StyledNavLink>
        <StyledNavLink to="/services">Services</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </LinkContainer>
      <GetInTouchContainer>
        <Heading>GET IN TOUCH</Heading>
        <FacebookContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
          </svg>
          <h1>Facebook</h1>
        </FacebookContainer>
      </GetInTouchContainer>
    </MobileNavbarContainer>
  );
};
