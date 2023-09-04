import { ComponentType, lazy } from "react";

// by default React.lazy worsk with default exports only. This is a wrapper to allow named exports
// named imports for React.lazy: https://github.com/facebook/react/issues/14603#issuecomment-726551598
export const lazyImport = <
  T extends ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I
>(
  factory: () => Promise<I>,
  name: K
): I => {
  return Object.create({
    [name]: lazy(() => factory().then((module) => ({ default: module[name] }))),
  });
};

// Usage
// const { Home } = lazyImport(() => import("./Home"), "Home");
