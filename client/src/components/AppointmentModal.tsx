import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  min-width: 50%;
  max-height: 70%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 10001;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    padding: 0 0 0 1rem;
    max-height: 100%;
    border-radius: 0;
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  min-height: 800px;
  overflow: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  ::-webkit-scrollbar {
    display: none; /* WebKit */
  }
`;

export default function AppointmentModal() {
  return (
    <ModalContainer>
      <StyledIframe
        src="https://app.acuityscheduling.com/schedule.php?owner=31168246"
        title="Schedule Appointment"
        frameBorder="0"
      ></StyledIframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </ModalContainer>
  );
}
