import {
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
import { useState, useEffect } from "react";

function App() {
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const accessLocalStorage = getLocalStorage("access");
    if (accessLocalStorage) {
      setHasAccess(true);
    }
  }, []);

  const handleLogin = (): void => {
    if (username === "elegantnails" && password === "phan") {
      setLocalStorage("access", "true", 24);
      setHasAccess(true);
    }
  };

  const setLocalStorage = (
    name: string,
    value: string,
    hours: number
  ): void => {
    const expirationTime = new Date().getTime() + hours * 60 * 60 * 1000;
    localStorage.setItem(name, JSON.stringify({ value, expirationTime }));
  };

  const getLocalStorage = (name: string): string | null => {
    const item = localStorage.getItem(name);
    if (item) {
      const parsedItem = JSON.parse(item);
      if (parsedItem.expirationTime > new Date().getTime()) {
        return parsedItem.value;
      } else {
        removeLocalStorage(name);
      }
    }
    return null;
  };

  const removeLocalStorage = (name: string): void => {
    localStorage.removeItem(name);
  };

  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html,
    body,
    :root {

        font-family:'Jost', Arial, Helvetica, sans-serif;
        scroll-behavior: smooth;
    }
    button,
    a {
        font-family:'Jost', Arial, Helvetica, sans-serif;
        cursor:pointer;
    }
    img{
        user-select: none;
    }

    ::-webkit-scrollbar {
      display: none;
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
      {hasAccess ? (
        <>
          <GlobalStyle />
          <RouterProvider router={router} />
        </>
      ) : (
        <>
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default App;
