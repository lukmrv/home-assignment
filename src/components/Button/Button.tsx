import { styled } from "../../utils/styled";

export const Button = styled("button")(({ theme }) => ({
  padding: `${theme.gap["8"]} ${theme.gap["16"]}`,
  border: "none",
  backgroundColor: theme.color["blue.50"],
  color: theme.color["blue.600"],
  borderRadius: theme.radius[8],
  fontWeight: theme.fontWeight.bold,
  cursor: "pointer",
  "&:hover": {},
}));
