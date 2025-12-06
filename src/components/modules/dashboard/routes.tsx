import React from "react";
import { Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { urls } from "./urls";

export const DashboardRoute = (
    <Route path={urls.dashboard} element={<DashboardPage />} />
);
