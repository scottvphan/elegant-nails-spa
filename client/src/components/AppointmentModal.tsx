import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  min-width: 50%;
  max-height: 80%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: hidden;
`;
export default function AppointmentModal() {
  return (
    <ModalContainer>
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=30979228"
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </ModalContainer>
  );
}
