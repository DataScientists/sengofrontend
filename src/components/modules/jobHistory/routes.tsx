import React from "react";
import { Route } from "react-router-dom";
import { JobHistoryDetailPage } from "./pages/JobHistoryDetail";
import { JobHistoryListPage } from "./pages/JobHistoryList";
import { urls } from "./urls";

export const JobHistoryRoute = (
    <>
        <Route path={urls.list} element={<JobHistoryListPage />} />
        <Route path={urls.detail(":id")} element={<JobHistoryDetailPage />} />
    </>
);
