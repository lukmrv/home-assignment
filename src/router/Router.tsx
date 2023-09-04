import { Suspense } from "react";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { CommonLoader } from "../components/CommonLoader/CommonLoader";
import { Layout } from "../components/Layout/Layout";
import { lazyImport } from "../utils/lazyImport";
import { APP_ROUTES } from "../utils/consts";

const { HomePage } = lazyImport(
  () => import("../pages/HomePage/HomePage"),
  "HomePage"
);
const { AccountantsPage } = lazyImport(
  () => import("../pages/AccountantsPage/AccountantsPage"),
  "AccountantsPage"
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={APP_ROUTES.home} element={<Layout />}>
      <Route
        index
        element={
          <Suspense fallback={<CommonLoader />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTES.accountants}
        element={
          <Suspense fallback={<CommonLoader />}>
            <AccountantsPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<CommonLoader />}>
            <Navigate to={APP_ROUTES.home} replace />
          </Suspense>
        }
      />
    </Route>
  )
);
