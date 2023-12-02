import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutContainer = styled.div``

export const Layout = () => {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
            <Footer />
        </LayoutContainer>
    )
}