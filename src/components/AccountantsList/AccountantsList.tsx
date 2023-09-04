import { useInfiniteQuery } from "react-query";
import { styled, useTheme } from "styled-components";

import { accountantsInfiniteQuery } from "../../api/accountants";
import { CommonLoader } from "../CommonLoader/CommonLoader";
import { AccountantCard } from "./AccountantCard";
import { Button } from "../Button/Button";
import { ComponentPropsWithoutRef } from "react";

const StyledAccountantCardsCointainer = styled("div").withConfig({
  shouldForwardProp: (prop) => !["isFetching"].includes(prop),
})<{ isFetching: boolean }>(({ theme, isFetching }) => ({
  display: "grid",
  gap: theme.gap["24"],
  opacity: isFetching ? "0.5" : "1",

  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
}));

const StyledLoadMoreButton = styled("div")(() => ({
  display: "flex",
}));

const LoadMoreButton = (props: ComponentPropsWithoutRef<"button">) => {
  return (
    <StyledLoadMoreButton>
      <Button {...props}>Load More</Button>
    </StyledLoadMoreButton>
  );
};

export const AccountantsList = () => {
  const theme = useTheme();
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(accountantsInfiniteQuery());

  if (!data || isLoading) {
    return <CommonLoader />;
  }

  return (
    <>
      <StyledAccountantCardsCointainer isFetching={isFetchingNextPage}>
        {data.pages.map((page) =>
          page.results.map((accountantObject) => (
            <AccountantCard
              key={accountantObject.login.uuid}
              accountantObject={accountantObject}
            />
          ))
        )}
      </StyledAccountantCardsCointainer>
      <div style={{ padding: theme.gap["24"] }}>
        <LoadMoreButton onClick={() => fetchNextPage()} />
      </div>
    </>
  );
};
