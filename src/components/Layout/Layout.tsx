import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";

export const StyledMainContainer = styled("main")(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledMainContainer>
        <Outlet />
      </StyledMainContainer>
    </>
  );
};
