import { useTheme } from "styled-components";
import { AccountantsList } from "../../components/AccountantsList/AccountantsList";

export const AccountantsPage = () => {
  const theme = useTheme();

  return (
    <div style={{ padding: theme.gap["24"] }}>
      <AccountantsList />
    </div>
  );
};
