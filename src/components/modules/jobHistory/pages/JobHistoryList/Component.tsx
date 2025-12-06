import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Table,
    Text,
    Badge,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { urls } from "../../urls";
import { JobHistoryListProvider, useJobHistoryListContext } from "./Provider";
import React from "react";

export const Component: React.FC = () => {
    return (
        <JobHistoryListProvider>
            <WrappedComponent />
        </JobHistoryListProvider>
    );
};

const WrappedComponent: React.FC = () => {
    const { data, loading, error, currentPage, handleNextPage, handlePrevPage } =
        useJobHistoryListContext();
    const navigate = useNavigate();

    if (loading && !data) {
        return (
            <Container maxW="container.xl" py={8}>
                <Text>Loading...</Text>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxW="container.xl" py={8}>
                <Text color="red.500">Error: {error.message}</Text>
            </Container>
        );
    }

    const edges = data?.jobExecutionHistoryList.edges ?? [];
    const pageInfo = data?.jobExecutionHistoryList.pageInfo;

    return (
        <Container maxW="container.xl" py={8}>
            <Heading mb={6}>Job History</Heading>
            <Box overflowX="auto" borderWidth="1px" borderRadius="lg">
                <Table.Root variant="simple">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>Job Name</Table.ColumnHeader>
                            <Table.ColumnHeader>Status</Table.ColumnHeader>
                            <Table.ColumnHeader>Start Time</Table.ColumnHeader>
                            <Table.ColumnHeader>Duration</Table.ColumnHeader>
                            <Table.ColumnHeader>Actions</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {edges.map(({ node }) => (
                            <Table.Row key={node.id}>
                                <Table.Cell>{node.jobName}</Table.Cell>
                                <Table.Cell>
                                    <Badge
                                        colorPalette={node.status === "SUCCESS" ? "green" : "red"}
                                    >
                                        {node.status}
                                    </Badge>
                                </Table.Cell>
                                <Table.Cell>{new Date(node.startedAt).toLocaleString()}</Table.Cell>
                                <Table.Cell>
                                    {node.durationSeconds ? `${node.durationSeconds.toFixed(2)} s` : "N/A"}
                                </Table.Cell>
                                <Table.Cell>
                                    <Button
                                        size="sm"
                                        onClick={() => navigate(urls.detail(node.id))}
                                    >
                                        View
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Box>
            <HStack mt={4} justify="space-between">
                <Button
                    onClick={() => void handlePrevPage()}
                    disabled={!pageInfo?.hasPreviousPage || loading}
                >
                    Previous
                </Button>
                <Text>Page {currentPage}</Text>
                <Button
                    onClick={() => void handleNextPage()}
                    disabled={!pageInfo?.hasNextPage || loading}
                >
                    Next
                </Button>
            </HStack>
        </Container>
    );
};
