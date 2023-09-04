import { styled } from "styled-components";

const StyledErrorFallbackContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: "40px",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
}));

export const ErrorFallback = () => {
  return (
    <StyledErrorFallbackContainer>
      <h2>Ooops, something went wrong</h2>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </StyledErrorFallbackContainer>
  );
};
