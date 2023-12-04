import styled from "styled-components"

const HomeContainer = styled.div`
    
`

const HeroSection = styled.div`
    
`

const Heading = styled.p`

`

const Subheading = styled.p`
    
`

const WelcomeMessage = styled.p`
    
`

const StyledButton = styled.button`
    
`

export const Home = () => {
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
                From the minute you step in our salon to the minute you step out, you’ll be 
                provided with excellent service and comfort in a relaxing environment. At 
                Elegant Nails & Spa, you are part of our family and our community.
            </WelcomeMessage>

            {/* Carousel */}

            <StyledButton>BOOK NOW</StyledButton>
        </HomeContainer>
    )
}