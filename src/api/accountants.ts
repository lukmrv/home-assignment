import { API_URL } from "../utils/consts";

const ACCOUNTANTS_INFINITE_QUERY_PAGE_LIMIT = 6;
const NUMBER_OF_ACCOUNTANTS_PER_PAGE = 2;

export type AccountantType = {
  cell: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
};
export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};

type PageParamProp = {
  page: number;
};

export const getAccountants = async ({
  page,
}: PageParamProp): Promise<AccountantResponseType> => {
  const accountantsParams = {
    seed: "abc",
    gender: "female",
    page: String(page),
    results: String(NUMBER_OF_ACCOUNTANTS_PER_PAGE),
  };
  const searchParams = new URLSearchParams(accountantsParams);
  const res = await fetch(`${API_URL}?${searchParams}`);

  return res.json();
};

export const accountantsInfiniteQuery = () => ({
  queryKey: ["accountants"],
  queryFn: async ({ pageParam = 1 }) => getAccountants({ page: pageParam }),
  getNextPageParam: (
    lastPage: AccountantResponseType,
    pages: AccountantResponseType[]
  ) => {
    if (pages) {
      if (lastPage.info.page < ACCOUNTANTS_INFINITE_QUERY_PAGE_LIMIT)
        return lastPage.info.page + 1;
    }
    return undefined;
  },
});
