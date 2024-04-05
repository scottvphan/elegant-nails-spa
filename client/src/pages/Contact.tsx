import { FormEvent } from "react"
import styled from "styled-components"
import emailjs from "@emailjs/browser"

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 50rem;
  gap: 2rem;
  margin: 0 auto;

  /* for laptop and desktop screens  */
  @media screen and (min-width: 1024px) {
    padding: 2rem 10rem;
  }
`

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Heading = styled.p`
  font-size: 2rem;
`

const TextContent = styled.p`
  max-width: 40ch;
`

const ContactInfo = styled.p`
  
`

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  padding: 1rem;
  gap: 1rem;
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
  border: 0;
`

const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  max-width: 100%;
  resize: none;
  border: 0;
`

export const Contact = () => {

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        "#form",
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result: { text: string }) => {
          console.log(result.text);
        },
        (error: { text: any }) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactContainer>
      <TextContainer>
        <Heading>
          Need to get in contact with us?
        </Heading>
        <TextContent>
          Call us at the phone number below or fill out the form to send us any messages or questions you may have.
        </TextContent>
        <ContactInfo>
          Phone: (610) 328-4340
        </ContactInfo>
        <ContactInfo>
          Email: elegantnails19070@gmail.com
        </ContactInfo>
      </TextContainer>
      <StyledForm id={"form"} onSubmit={(e) => handleFormSubmit(e)}>
        <StyledLabel>Name</StyledLabel>
        <StyledInput type="text" name="from_name"/>
        <StyledLabel>Email</StyledLabel>
        <StyledInput type="email" name="from_email"/>
        <StyledLabel>Message</StyledLabel>
        <StyledTextArea name="message" rows={5}/>
        <StyledButton>Submit Form</StyledButton>
      </StyledForm>
    </ContactContainer>
  )
}