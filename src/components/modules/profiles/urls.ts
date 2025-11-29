export const profilesSection = "/profiles";

export const profileDetailPath = (id: string) => `${profilesSection}/${id}`;
export const profileDetailRoute = profileDetailPath + "/:id";
