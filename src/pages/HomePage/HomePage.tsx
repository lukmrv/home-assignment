import { useTheme } from "styled-components";

export const HomePage = () => {
  const theme = useTheme();

  return <div style={{ padding: theme.gap["24"] }}>HopePage</div>;
};
