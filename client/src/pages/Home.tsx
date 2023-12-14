import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

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

      {/* Carousel */}
      <ButtonContainer>
        <StyledButton onClick={handleAppointmentModal}>BOOK NOW</StyledButton>
      </ButtonContainer>
    </HomeContainer>
  );
};
