import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import FacebookIcon from "../assets/logo/facebook.svg"

const FooterContainer = styled.footer`
  background-color: #212121;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  /* laptop & desktop screens */
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 6rem;
  }
  /* tablet screens */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-areas:
      "message message"
      "location link"
      /* git is short for get in touch */
      "git git";
  }
`;

const FooterMessage = styled.p`
  color: #fff;
  font-family: Jost;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
  /* laptop & desktop screens */
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
    font-size: 1.2rem;
  }
  grid-area: message;
  @media screen and (max-width:520px) {
    font-size:1.1rem;
  }
`;

const FooterHeading = styled.h3`
  color: #fff;
  font-family: Jost;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 400;
`;

const FooterAddress = styled.address`
  color: #fff;
  font-family: Jost;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
`;

const LocationContainer = styled.div`
  grid-area: location;
`;

const LinksContainer = styled.div`
  grid-area: link;
`;

const LinkContainer = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:active {
    text-decoration: none;
    color: white;
  }
`;
const GetInTouchContainer = styled.div`
  /* git is short for get in touch */
  grid-area: git;
  display:flex;
  flex-direction: column;
  gap:1rem;
`;

const CopyrightContainer = styled.div`
  width: 100%;
  background: #1C1C1C;
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 2rem 6rem;
  }
`

const CopyrightText = styled.p`
  color: #9a9a9a;
`
const StyledGoogleMap = styled.iframe`
  height:100%;
`

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterMessage>
          Thank you for visiting Elegant Nails & Spa online. If this is your first
          time visiting us, please schedule an appointment today. You won’t be
          disappointed.
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
        <GetInTouchContainer>
          <FooterHeading>Directions</FooterHeading>
          {/* <StyledNavLink
            to={"https://m.facebook.com/profile.php?id=155017304535547"}
          >
            <StyledIcon src={FacebookIcon} />
            Facebook
          </StyledNavLink> */}
          <StyledGoogleMap
            loading="lazy"
            // allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrby6QnLCxokRcMXea-IIlVk&key=AIzaSyBBW2F1HMcu3yJ1wG2sHo4eRoelcb2jlVY"
          ></StyledGoogleMap>
        </GetInTouchContainer>
      </FooterContainer>

      <CopyrightContainer>
        <CopyrightText>ENSP &#169; 2024. All Rights Reserved. Services and prices are subject to change without notice.</CopyrightText>
      </CopyrightContainer>
    </>
  );
};
