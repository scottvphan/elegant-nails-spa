import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MobileNavbar } from "./MobileNavbar";

const LayoutContainer = styled.div``;

export const Layout = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  
  return (
    <LayoutContainer>
      {isHamburgerOpen && (
        <MobileNavbar setIsHamburgerOpen = {setIsHamburgerOpen} />
      )}
      <Header setIsHamburgerOpen = {setIsHamburgerOpen} />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};
