import { AppLayout } from "@components/templates";
import { WindowTitle } from "@components/ui/atoms";
import { ProfileEntriesPage } from "@components/features/pages/ProfileEntriesPage";
import errorTracker from "@shared/errorTracking/errorTracker";
import { SentryRoutes } from "@shared/router";
import { ErrorBoundary } from "react-error-boundary";
import { Route } from "react-router-dom";

import { App } from "./App";

export const Routes: React.FCWithChildren = ({ children }) => {
  return (
    <>
      <WindowTitle title="Sheng" />

      <ErrorBoundary
        onError={errorTracker.captureException}
        fallbackRender={() => <h1>Somethign went wrong</h1>}
      >
        {" "}
        <AppLayout>
          <SentryRoutes>
            <Route path="/" Component={App} />
            <Route path="/profile-entries" Component={ProfileEntriesPage} />
            {children}
          </SentryRoutes>
        </AppLayout>
      </ErrorBoundary>
    </>
  );
};
