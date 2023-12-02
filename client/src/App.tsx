import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { createGlobalStyle } from "styled-components";

function App() {
    const GlobalStyle = createGlobalStyle`
  html,
  body,
  :root {
      margin: 0;
      padding: 0;
      font-family:'Jost', Arial, Helvetica, sans-serif;
      scroll-behavior: smooth;
  }
  button {
      font-family:'Jost', Arial, Helvetica, sans-serif;
      cursor:pointer;
  }
  img{
      user-select: none;
  }
`;
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        )
    );

    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
