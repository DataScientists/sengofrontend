import { Spinner } from "@chakra-ui/react";
import { AuthLayout } from "@components/templates";
import { SentryRoutes } from "@shared/router";
import { lazy, Suspense } from "react";
import { Navigate, Route } from "react-router-dom";

import { loginPath } from "./urls";

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
    <Spinner color="red.400" size="lg" />
  </div>
);

const LoginView = lazy(() =>
  import("./pages/Login").then((m) => ({ default: m.LoginView })),
);

export const AuthRouter: React.FC = () => {
  return (
    <AuthLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <SentryRoutes>
          <Route Component={LoginView} path={loginPath} />
          <Route path="*" element={<Navigate to={loginPath} replace />} />
        </SentryRoutes>
      </Suspense>
    </AuthLayout>
  );
};

AuthRouter.displayName = "AuthRouter";
export default AuthRouter;
