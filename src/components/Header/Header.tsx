import { styled } from "../../utils/styled";
import { Navigation } from "./Navigation";

export const StyledHeader = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.color.white,
  padding: `${theme.gap["8"]} 0 0 ${theme.gap["24"]}`,
}));

export const Header = () => (
  <StyledHeader>
    <Navigation />
  </StyledHeader>
);
