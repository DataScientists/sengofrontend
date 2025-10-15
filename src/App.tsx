import { Box, Container, Grid, GridItem,Heading } from "@chakra-ui/react";
import React from "react";

import { ProfileList } from "./components/features/organisms/ProfileList";
import { ProfileTitleChart } from "./components/features/organisms/ProfileTitleChart";
import { SearchBar } from "./components/features/organisms/SearchBar";
import { useSearchBarContext } from "./components/features/organisms/SearchBar/SearchBarProvider";
import { AppProvider } from "./components/features/providers";

const AppContent: React.FC = () => {
  const { data, loading, error } = useSearchBarContext();

  return (
    <>
      <SearchBar />
      <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={6} mt={6}>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" p={6} bg="white" shadow="sm">
            <ProfileTitleChart />
          </Box>
        </GridItem>
        <GridItem>
          <ProfileList data={data} loading={loading} error={error} />
        </GridItem>
      </Grid>
    </>
  );
};

export const App: React.FC = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="xl">
          Profile Search
        </Heading>
      </Box>

      <AppProvider>
        <AppContent />
      </AppProvider>
    </Container>
  );
};

App.displayName = "App";
