import { FormEvent } from "react"
import styled from "styled-components"
import emailjs from "@emailjs/browser"

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
      <ContactInfo>
        Phone: (610) 328-4340
      </ContactInfo>
      <ContactInfo>
        Email: elegantnails19070@gmail.com
      </ContactInfo>
      <StyledForm id={"form"} onSubmit={(e) => handleFormSubmit(e)}>
        <StyledLabel>Name</StyledLabel>
        <StyledInput type="text" name="from_name"/>
        <StyledLabel>Email</StyledLabel>
        <StyledInput type="email" name="from_email"/>
        <StyledLabel>Message</StyledLabel>
        <StyledTextArea name="message" rows={5}/>
        <StyledInput type="submit" value="Send" />
      </StyledForm>
    </ContactContainer>
  )
}