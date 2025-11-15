import {
  Box,
  Button,
  Container,
  createListCollection,
  Flex,
  Heading,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { CreateProfileEntryModal } from "../../organisms/CreateProfileEntryModal";
import { ProfileEntryList } from "../../organisms/ProfileEntryList";
import {
  ProfileEntriesProvider,
  useProfileEntriesContext,
} from "../../providers/ProfileEntriesProvider";

const ProfileEntriesContent: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    status,
    handleStatusChange,
    handleSearch,
    loading,
    error,
    data,
    currentPage,
    handleNextPage,
    handlePrevPage,
    createProfileEntry,
    createLoading,
    isModalOpen,
    openModal,
    closeModal,
    handleFetchProfileEntry,
    fetchLoading,
  } = useProfileEntriesContext();

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Box py={6}>
      <VStack gap={6} align="stretch">
        <Box>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading size="lg">Profile Entries</Heading>
            <Button colorScheme="blue" onClick={openModal}>
              Add Profile Entry
            </Button>
          </Flex>
          <HStack gap={4} mb={6}>
            <Input
              placeholder="Search by LinkedIn URN"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <Select.Root
              collection={statusCollection}
              value={[status]}
              onValueChange={(details) => {
                handleStatusChange(details.value[0]);
              }}
            >
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Filter by status" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Select.Positioner>
                <Select.Content>
                  {statusCollection.items.map((item) => (
                    <Select.Item key={item.value} item={item.value}>
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Select.Root>
            <Button onClick={handleSearch} loading={loading}>
              Search
            </Button>
          </HStack>
        </Box>

        <ProfileEntryList
          data={data}
          loading={loading}
          error={error}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
          currentPage={currentPage}
          onFetchProfileEntry={handleFetchProfileEntry}
        />
      </VStack>

      <CreateProfileEntryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={createProfileEntry}
        isLoading={createLoading}
      />
    </Box>
  );
};

export const ProfileEntriesPage: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <ProfileEntriesProvider>
        <ProfileEntriesContent />
      </ProfileEntriesProvider>
    </Container>
  );
};

const statusCollection = createListCollection({
  items: [
    { label: "Completed", value: "COMPLETED" },
    { label: "Pending", value: "PENDING" },
    { label: "Fetching", value: "FETCHING" },
    { label: "Failed", value: "FAILED" },
  ],
});
