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
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const accessCookie = getCookie("access");
    if (accessCookie) {
      setHasAccess(true);
    }
  }, []);

  const handleLogin = (): void => {
    if (!password.trim()) {
      setError("Password is empty");
      return;
    }

    if (password === "elegantphan") {
      setCookie("access", "true", 24);
      setHasAccess(true);
    } else {
      setError("Incorrect password");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const setCookie = (name: string, value: string, hours: number): void => {
    const expirationTime = new Date().getTime() + hours * 60 * 60 * 1000;
    document.cookie = `${name}=${JSON.stringify({
      value,
      expirationTime,
    })}; expires=${new Date(expirationTime).toUTCString()}`;
  };

  const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        const parsedValue = JSON.parse(cookieValue);
        if (parsedValue.expirationTime > new Date().getTime()) {
          return parsedValue.value;
        } else {
          removeCookie(name);
        }
      }
    }
    return null;
  };

  const removeCookie = (name: string): void => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
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
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </form>
        </>
      )}
    </>
  );
}

export default App;
