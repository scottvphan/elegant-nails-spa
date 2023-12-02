import styled from "styled-components";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutContainer = styled.div`
    
`

export const Layout = () => {
    return (
        <LayoutContainer>

            <Outlet />
            <Footer />
        </LayoutContainer>
    )
}