import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MobileNavbar } from "./MobileNavbar";
import AppointmentModal from "./AppointmentModal";

const LayoutContainer = styled.div`

`;
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
export const Layout = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState<boolean>(false);

  const handleAppointmentModal = () => {
    setIsAppointmentOpen((prevState: boolean) => !prevState);
  };

  return (
    <LayoutContainer>
      {isHamburgerOpen && (
        <MobileNavbar setIsHamburgerOpen={setIsHamburgerOpen} />
      )}
      {isAppointmentOpen && (
        <>
          <AppointmentModal />
          <ModalBackdrop onClick={handleAppointmentModal} />
        </>
      )}
      <Header
        setIsHamburgerOpen={setIsHamburgerOpen}
        setIsAppointmentOpen={setIsAppointmentOpen}
      />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};
