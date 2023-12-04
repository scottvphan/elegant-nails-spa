import styled from "styled-components"

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContactInfo = styled.p`
    
`

const StyledForm = styled.form`
    width: 100%;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    background-color: #eff5ff;
    padding: 1rem;
`

const StyledLabel = styled.label`
    
`

const StyledButton = styled.button`
    
`

const StyledInput = styled.input``

export const Contact = () => {
    return (
        <ContactContainer>
            <ContactInfo>
                Phone: (610) 328-4340
            </ContactInfo>
            <ContactInfo>
                Email: elegantnails19070@gmail.com
            </ContactInfo>
            <StyledForm>
                <StyledLabel htmlFor="name">Name</StyledLabel>
                <StyledInput id="name" type="text" />
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput id="email" type="text" />
                <StyledLabel htmlFor="message">Message</StyledLabel>
                <StyledInput id="message" type="text" />
                <StyledButton>Submit Form</StyledButton>
            </StyledForm>
        </ContactContainer>
    )
}