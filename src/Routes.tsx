import { Spinner } from "@chakra-ui/react";
import { AuthRouter } from "@components/modules/auth/index";
import { DashboardRoute } from "@components/modules/dashboard";
import { JobHistoryRoute } from "@components/modules/jobHistory";
import { ProfileEntriesRoute } from "@components/modules/profileEntries";
import { ProfilesRoute } from "@components/modules/profiles";
import { AppLayout } from "@components/templates";
import { WindowTitle } from "@components/ui/atoms";
import { useAuthContext } from "@shared/auth";
import errorTracker from "@shared/errorTracking/errorTracker";
import { SentryRoutes } from "@shared/router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route } from "react-router-dom";

const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      inset: 0,
      width: "100vw",
      height: "100vh",
      background: "white",
      zIndex: 2999,
    }}
  >
    <Spinner color="purple.400" size="lg" />
  </div>
);

export const Routes: React.FCWithChildren = ({ children }) => {
  const { authenticated, authenticating } = useAuthContext();

  return (
    <>
      <WindowTitle title="Sheng" />

      <ErrorBoundary
        onError={errorTracker.captureException}
        fallbackRender={() => <h1>Somethign went wrong</h1>}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <SentryRoutes>
            {authenticated ? (
              <Route
                path="*"
                element={
                  <AppLayout>
                    <SentryRoutes>
                      {DashboardRoute}
                      {JobHistoryRoute}
                      {ProfilesRoute}
                      {ProfileEntriesRoute}
                      {children ?? null}
                    </SentryRoutes>
                  </AppLayout>
                }
              />
            ) : authenticating ? (
              <Route path="*" element={<LoadingSpinner />} />
            ) : (
              <Route path="*" element={<AuthRouter />} />
            )}
          </SentryRoutes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
