import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { GoogleReviews } from "../components/GoogleReviews";

import NailsOne from "../assets/carousel/nails-image-1.jpg";
import NailsTwo from "../assets/carousel/nails-image-2.jpg";
import NailsThree from "../assets/carousel/nails-image-3.jpg";
import NailsFour from "../assets/carousel/nails-image-4.jpg";
import NailsFive from "../assets/carousel/nails-image-5.jpg";
import NailsSix from "../assets/carousel/nails-image-6.jpg"
import BackgroundOne from "../assets/background/background-image-1.png";
import BackgroundTwo from "../assets/background/background-image-2.jpg";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  /* for laptop and desktop screens  */
  @media screen and (min-width: 1024px) {
    padding: 2rem 10rem;
  }
`

const HeroSection = styled.div`
  text-align: center;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  min-height: 40rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  /* counters the HomeContainer padding for the laptop and desktop screens */
  /* @media screen and (min-width: 1024px) {
    margin: -2rem -10rem 2rem -10rem;
  } */
`;

const DarkContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 75%;
  height: 100%;
  padding: 1rem;
`;

const Heading = styled.p`
  font-size: 4rem;
  @media screen and (max-width: 540px) {
    font-size:2rem;
  }
`;

const Cursive = styled.p`
  font-family: 'Mr De Haviland', cursive;
`

const ColoredCursive = styled(Cursive)`
  color: #f9b698;
`

const Subheading = styled.p`
  font-size: 1.5rem;
  @media screen and (max-width: 540px) {
    font-size:1rem;
  }
`;

const WelcomeMessage = styled.p`
  text-align: center;
  max-width: 60rem;
  margin: 0 auto;
  font-size: 1.5rem;
  color: #757575;
  @media screen and (max-width: 540px) {
    font-size:1rem;
  }
`;

const StyledButton = styled.button`
  border: 0;
  color: white;
  background-color: #f9b698;
  padding: 1rem;
  text-align: center;
  width: 100%;
  font-size: 2rem;
  white-space: nowrap;

  @media screen and (max-width: 540px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  @media screen and (max-width: 540px) {
    width:50%;
  }
`;

const CarouselContainer = styled.div`
  padding: 1rem;
  max-width: 100%;
  margin: 0 auto;
`;

const ImgContainer = styled.div`
  padding: 0.5rem;
  height: 100%;
  width: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

interface HomeProps {
  setIsAppointmentOpen: Dispatch<SetStateAction<boolean>>;
}

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const heroResponsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
};

export const Home = () => {
  const { setIsAppointmentOpen }: HomeProps = useOutletContext();

  const handleAppointmentModal = () => {
    setIsAppointmentOpen((prevState: boolean) => !prevState);
  };

  return (
    <HomeContainer>
      {/* Hero Section */}
      <Carousel
        additionalTransfrom={1}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={7500}
        centerMode={false}
        className=""
        containerClass="container"
        customTransition="transform 1500ms ease-in-out"
        draggable={true}
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        partialVisbile={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={heroResponsive}
        rtl={false}
        showDots={false}
        slidesToSlide={1}
        swipeable
        transitionDuration={1500}
      >
        <HeroSection style={{ backgroundImage: `url(${BackgroundOne})`}}>
          <DarkContainer>
          <Heading>
              <Cursive>Welcome to </Cursive>
              ELEGANT NAILS & SPA
          </Heading>
          <Subheading>We look forward to servicing you. Come visit us.</Subheading>
          <Subheading>Mon-Fri: 9:30 AM – 7:00 PM</Subheading>
          <Subheading>Saturday: 9:00 AM – 6:00 PM</Subheading>
          <Subheading>Sunday: Closed</Subheading>
          </DarkContainer>
          {/* Book Button */}
          <ButtonContainer>
          <StyledButton onClick={handleAppointmentModal}>BOOK NOW</StyledButton>
          </ButtonContainer>
        </HeroSection>

        <HeroSection style={{ backgroundImage: `url(${BackgroundTwo})`}}>
          <DarkContainer>
            <Heading>
                <Cursive>Get a manicure and pedicure at</Cursive>
                ELEGANT NAILS & SPA
            </Heading>
            <Subheading>Find a moment to treat yourself. Come visit us.</Subheading>
            <Subheading>Mon-Fri: 9:30 AM – 7:00 PM</Subheading>
            <Subheading>Saturday: 9:00 AM – 6:00 PM</Subheading>
            <Subheading>Sunday: Closed</Subheading>
          </DarkContainer>
          {/* Book Button */}
          <ButtonContainer>
          <StyledButton onClick={handleAppointmentModal}>BOOK NOW</StyledButton>
          </ButtonContainer>
        </HeroSection>
      </Carousel>

      <ContentContainer>
        <WelcomeMessage>
          <Heading>
            <ColoredCursive>Welcome to</ColoredCursive> 
            Elegant Nails & Spa
          </Heading>
          From the minute you step in our salon to the minute you step out, you’ll
          be provided with excellent service and comfort in a relaxing
          environment. At Elegant Nails & Spa, you are part of our family and our
          community.
        </WelcomeMessage>

        <CarouselContainer>
          <Carousel
            additionalTransfrom={0}
            centerMode={true}
            className=""
            containerClass="react-multi-carousel-list"
            draggable={false}
            focusOnSelect={false}
            infinite
            itemClass="carousel-item-padding-40-px"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
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

            <ImgContainer>
              <StyledImg src={NailsSix} />
            </ImgContainer>
          </Carousel>
        </CarouselContainer>
        <GoogleReviews />
      </ContentContainer>
    </HomeContainer>
  );
};
