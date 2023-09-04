import { styled } from "styled-components";
import { APP_ROUTES } from "../../utils/consts";
import { InternalLink } from "../Typography/Typography";

const StyledNavitagion = styled("nav")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
}));

export const Navigation = () => (
  <StyledNavitagion>
    <InternalLink to={APP_ROUTES.home}>Home</InternalLink>
    <InternalLink to={APP_ROUTES.accountants}>Tweets</InternalLink>
  </StyledNavitagion>
);
