import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import NailsOne from "../assets/carousel/nails-image-1.jpg"
import NailsTwo from "../assets/carousel/nails-image-2.jpg"
import NailsThree from "../assets/carousel/nails-image-3.jpg"
import NailsFour from "../assets/carousel/nails-image-4.jpg"
import NailsFive from "../assets/carousel/nails-image-5.jpg"

const HomeContainer = styled.div``;

const HeroSection = styled.div`
  text-align: center;
`;

const Heading = styled.p``;

const Subheading = styled.p``;

const WelcomeMessage = styled.p`
  text-align: center;
`;

const StyledButton = styled.button`
  border: 0;
  color: white;
  background-color: #f9b698;
  padding: 0.3125rem 1.375rem;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.div`
  padding: 1rem;
  height: 100%;
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`

interface HomeProps {
  setIsAppointmentOpen: Dispatch<SetStateAction<boolean>>;
} 
export const Home = () => {
  const { setIsAppointmentOpen }:HomeProps = useOutletContext();

  const handleAppointmentModal = () => {
    setIsAppointmentOpen((prevState: boolean) => !prevState);
  };

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <Heading>Welcome to Elegant Nails & Spa</Heading>
        <Subheading>Mon-Fri: 9:30 AM – 7:00 PM</Subheading>
        <Subheading>Saturday: 9:00 AM – 6:00 PM</Subheading>
        <Subheading>Sunday: Closed</Subheading>
      </HeroSection>

      <WelcomeMessage>
        From the minute you step in our salon to the minute you step out, you’ll
        be provided with excellent service and comfort in a relaxing
        environment. At Elegant Nails & Spa, you are part of our family and our
        community.
      </WelcomeMessage>

      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={true}
        className=""
        containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rtl={false}
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        <ImgContainer>
          <StyledImg src={NailsOne} />
        </ImgContainer>
        
        <ImgContainer>
          <StyledImg src={NailsTwo} />
        </ImgContainer>

        <ImgContainer>
          <StyledImg src={NailsThree} />
        </ImgContainer>

        <ImgContainer>
          <StyledImg src={NailsFour} />
        </ImgContainer>

        <ImgContainer>
          <StyledImg src={NailsFive} />
        </ImgContainer>
      </Carousel>

      {/* Carousel */}
      <ButtonContainer>
        <StyledButton onClick={handleAppointmentModal}>BOOK NOW</StyledButton>
      </ButtonContainer>
    </HomeContainer>
  );
};
