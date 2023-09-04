import { NavLink } from "react-router-dom";
import { styled, Theme } from "../../utils/styled";

export const InternalLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  padding: `${theme.gap["8"]} ${theme.gap["16"]}`,
  border: "none",
  backgroundColor: theme.color["blue.50"],
  color: theme.color["blue.600"],
  borderRadius: theme.radius[8],
  fontWeight: theme.fontWeight.bold,
  cursor: "pointer",
  "&:hover": {},
  "&.active": {},
}));

export const Subtitle = styled("h3").withConfig({
  shouldForwardProp: (prop) => !["color"].includes(prop),
})<{ color?: Theme["color"] }>(({ theme, color }) => ({
  margin: "0",
  padding: "0",
  lineHeight: "32px",
  fontSize: "24px",
  fontWeight: theme.fontWeight.bold,
  color: color ? color : theme.color.black,
}));

export const PagargraphS = styled("p").withConfig({
  shouldForwardProp: (prop) => !["color"].includes(prop),
})<{ color?: Theme["color"] }>(({ theme, color }) => ({
  lineHeight: "20px",
  fontSize: "14px",
  color: color ? color : theme.color["grey.800"],
  fontWeight: theme.fontWeight.regular,
}));

export const PagargraphM = styled("p").withConfig({
  shouldForwardProp: (prop) => !["color"].includes(prop),
})<{ color?: Theme["color"] }>(({ theme, color }) => ({
  lineHeight: "24px",
  fontSize: "16px",
  color: color ? color : theme.color["grey.800"],
  fontWeight: theme.fontWeight.regular,
}));
