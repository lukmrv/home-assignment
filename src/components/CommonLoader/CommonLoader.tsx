import { styled } from "../../utils/styled";

const StyledCommonLoader = styled("div")(({ theme }) => ({
  padding: theme.gap["24"],
}));

export const CommonLoader = () => (
  <StyledCommonLoader>Loading...</StyledCommonLoader>
);
