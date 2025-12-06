import { Route } from "react-router";

import { Container as ProfileEntriesPage } from "./pages/ProfileEntries/Container";
import { entriesSection } from "./urls";

export const ProfileEntriesRoute = (
  <>
    <Route path={entriesSection} element={<ProfileEntriesPage />} />
  </>
);
