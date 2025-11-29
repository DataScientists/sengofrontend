import { Route } from "react-router";

import { Container as ProfilesPage } from "./pages/Profiles/Container";
import { profilesSection } from "./urls";

export const ProfilesRoute = (
  <>
    <Route path={profilesSection} element={<ProfilesPage />} />
  </>
);
