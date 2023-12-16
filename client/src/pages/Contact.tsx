import styled from "styled-components"

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  /* for laptop and desktop screens  */
  @media screen and (min-width: 1024px) {
    padding: 2rem 10rem;
  }
`

const ContactInfo = styled.p`
  
`

const StyledForm = styled.form`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 1rem;
  gap: 0.5rem;
`

const StyledLabel = styled.label`
    
`

const StyledButton = styled.button`
  background-color: #f9b698;
  border: none;
  color: white;
  padding: 0.5rem;
`

const StyledInput = styled.input`
  padding: 0.5rem;
`

const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  max-width: 100%;
  resize: none;
`

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
                <StyledTextArea id="message" rows={5}/>
                <StyledButton>Submit Form</StyledButton>
            </StyledForm>
        </ContactContainer>
    )
}