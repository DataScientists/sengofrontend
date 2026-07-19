import { Container, Heading } from "@chakra-ui/react";
import { ProfileList } from "@components/features/organisms/ProfileList";
import { SearchBar } from "@components/features/organisms/SearchBar";
// Title chart temporarily disabled — restore the imports below when re-enabling.
// import { Grid, GridItem } from "@chakra-ui/react";
// import { ProfileTitleChart } from "@components/features/organisms/ProfileTitleChart";
import { Box } from "@components/ui/atoms";

import { ProfilesProvider, useProfilesContext } from "./Provider";

export const Component: React.FC = () => {
  return (
    <ProfilesProvider>
      <WrappedComponent />
    </ProfilesProvider>
  );
};

const WrappedComponent: React.FC = () => {
  const {
    data,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    handleSearch,
    currentPage,
    handleNextPage,
    handlePrevPage,
  } = useProfilesContext();

  return (
    <>
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center" mb={8}>
          <Heading as="h1" size="xl">
            Profile Search
          </Heading>
        </Box>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={() => void handleSearch()}
        />

        {/* Title chart temporarily disabled.
        <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={6} mt={6}>
          <GridItem>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={6}
              bg="white"
              shadow="sm"
            >
              <ProfileTitleChart searchTerm={searchTerm} />
            </Box>
          </GridItem>
          <GridItem>
            ...profile list was here...
          </GridItem>
        </Grid>
        */}
        <Box mt={6} />
        <ProfileList
          data={data}
          loading={loading}
          error={error}
          currentPage={currentPage}
          handlePrevPage={() => void handlePrevPage()}
          handleNextPage={() => void handleNextPage()}
        />
      </Container>
    </>
  );
};
