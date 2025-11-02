import { 
  Box, 
  Button, 
  Flex, 
  HStack, 
  Skeleton, 
  Stack, 
  Text, 
  Badge,
  Table
} from '@chakra-ui/react';
import React from 'react';
import type { ProfileEntriesResponse } from '@service/profileEntries/types';
import { format } from 'date-fns';

interface ProfileEntryListProps {
  data: ProfileEntriesResponse | null;
  loading: boolean;
  error: Error | null;
  onNextPage: () => void;
  onPrevPage: () => void;
  currentPage: number;
}

export const ProfileEntryList: React.FC<ProfileEntryListProps> = ({
  data,
  loading,
  error,
  onNextPage,
  onPrevPage,
  currentPage,
}) => {
  if (loading) {
    return (
      <Stack gap={4}>
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} height="60px" />
        ))}
      </Stack>
    );
  }

  if (error) {
    return <Box p={4}>Error loading profile entries: {error.message}</Box>;
  }

  if (!data || !data.edges || data.edges.length === 0) {
    return <Box p={4}>No profile entries found.</Box>;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'green';
      case 'PENDING':
        return 'yellow';
      case 'FETCHING':
        return 'blue';
      case 'FAILED':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <Box>
      <Table.Root variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>LinkedIn URN</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
            <Table.ColumnHeader>Gender</Table.ColumnHeader>
            <Table.ColumnHeader>Fetch Count</Table.ColumnHeader>
            <Table.ColumnHeader>Last Fetched</Table.ColumnHeader>
            <Table.ColumnHeader>Created At</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.edges.map((edge) => {
            if (!edge || !edge.node) return null;
            const entry = edge.node;
            
            return (
              <Table.Row key={entry.id}>
                <Table.Cell>{entry.id}</Table.Cell>
                <Table.Cell>{entry.linkedinUrn}</Table.Cell>
                <Table.Cell>
                  <Badge colorScheme={getStatusColor(entry.status)}>{entry.status}</Badge>
                </Table.Cell>
                <Table.Cell>{entry.gender || 'N/A'}</Table.Cell>
                <Table.Cell>{entry.fetchCount}</Table.Cell>
                <Table.Cell>{entry.lastFetchedAt ? format(new Date(entry.lastFetchedAt), 'yyyy-MM-dd HH:mm') : 'Never'}</Table.Cell>
                <Table.Cell>{format(new Date(entry.createdAt), 'yyyy-MM-dd HH:mm')}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>

      <Flex justifyContent="space-between" mt={4} alignItems="center">
        <Text>
          Total: {data.totalCount} entries | Page {currentPage}
        </Text>
        <HStack spaceX={2}>
          <Button
            onClick={onPrevPage}
            disabled={!data.pageInfo.hasPreviousPage}
            size="sm"
          >
            Previous
          </Button>
          <Button
            onClick={onNextPage}
            disabled={!data.pageInfo.hasNextPage}
            size="sm"
          >
            Next
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};