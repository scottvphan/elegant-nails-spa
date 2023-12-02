import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.footer`
    background-color: black;
    padding: 1rem;
    box-sizing: border-box;
`;

const FooterMessage = styled.p`
    color: #fff;
    font-family: Jost;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
`;

const FooterHeading = styled.h3`
    color: #fff;
    font-family: Jost;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
`;

const FooterAddress = styled.address`
    color: #fff;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px; /* 220% */
`;

const LocationContainer = styled.div`

`

const LinksContainer = styled.div`

`

const LinkContainer = styled.div`
  display: flex;
  color:white;
  flex-direction: column;
  gap:1rem;
`

const StyledNavLink = styled(NavLink)`
  color:white;
  text-decoration: none;
  &:active{
    text-decoration: none;
    color:white;
  }
`

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterMessage>
                Thank you for visiting Elegant Nails & Spa online. If this is
                your first time visiting us, please schedule an appointment
                today. You won’t be disappointed.
            </FooterMessage>
            <LocationContainer>
              <FooterHeading>Location</FooterHeading>
              <FooterAddress>
                  407 Baltimore Pike <br />
                  Morton, PA 19070 <br />
                  elegantnails19070@gmail.com <br />
                  (610) 238-4340 <br />
              </FooterAddress>
            </LocationContainer>
            <LinksContainer>
              <FooterHeading>Links</FooterHeading>
              <LinkContainer>
                <StyledNavLink to={"/"}>Home</StyledNavLink>
                <StyledNavLink to={"/services"}>Services</StyledNavLink>
                <StyledNavLink to={"/contact"}>Contact</StyledNavLink>
              </LinkContainer>
            </LinksContainer>
        </FooterContainer>
    );
};
