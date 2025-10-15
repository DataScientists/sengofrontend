import { Box, Button, Flex, HStack, Skeleton, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Profile } from '../Profile';
import type { ProfilesResponse } from '@service/profiles/types';
import { useSearchBarContext } from '../SearchBar/SearchBarProvider';

interface ProfileListProps {
  data: ProfilesResponse | null;
  loading: boolean;
  error: Error | null;
}

export const ProfileList: React.FC<ProfileListProps> = ({ data, loading, error }) => {
  const { currentPage, handleNextPage, handlePrevPage, searchTerm } = useSearchBarContext();

  // Skeleton loading state
  if (loading) {
    return (
      <Stack gap={4} mt={8} align="stretch">
        {[...Array(5)].map((_, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" shadow="sm">
            <Skeleton height="24px" width="70%" mb={2} />
            <Skeleton height="20px" width="50%" mb={2} />
            <Skeleton height="16px" width="30%" />
          </Box>
        ))}
      </Stack>
    );
  }

  if (error) {
    return (
      <Text color="red.500" mt={4}>
        Error: {error.message}
      </Text>
    );
  }

  if (!data || !data.edges || data.edges.length === 0) {
    return <Text mt={8} textAlign="center">No results found</Text>;
  }

  return (
    <Stack gap={4} mt={8} align="stretch">
      {data.edges.map((edge) => 
        edge?.node ? (
          <Profile key={edge.node.id} profile={edge.node} searchTerm={searchTerm} />
        ) : null
      )}
      
      <Flex justify="space-between" mt={4}>
        <HStack>
          <Button 
            onClick={handlePrevPage} 
            disabled={!data.pageInfo.hasPreviousPage || loading}
          >
            Previous
          </Button>
          <Text>Page {currentPage}</Text>
          <Button 
            onClick={handleNextPage} 
            disabled={!data.pageInfo.hasNextPage || loading}
          >
            Next
          </Button>
        </HStack>
        <Text>Total: {data.totalCount}</Text>
      </Flex>
    </Stack>
  );
};

ProfileList.displayName = 'ProfileList';