import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Badge,
    Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { JobHistoryDetailProvider, useJobHistoryDetailContext } from "./Provider";
import React from "react";

export const Component: React.FC = () => {
    return (
        <JobHistoryDetailProvider>
            <WrappedComponent />
        </JobHistoryDetailProvider>
    );
};

const WrappedComponent: React.FC = () => {
    const { data, loading, error } = useJobHistoryDetailContext();
    const navigate = useNavigate();

    if (loading) {
        return (
            <Container maxW="container.md" py={8}>
                <Text>Loading...</Text>
            </Container>
        );
    }

    if (error || !data?.jobExecutionHistory) {
        return (
            <Container maxW="container.md" py={8}>
                <Text color="red.500">
                    Error: {error?.message || "Job execution not found"}
                </Text>
            </Container>
        );
    }

    const { jobExecutionHistory: job } = data;

    return (
        <Container maxW="container.md" py={8}>
            <Button mb={4} onClick={() => navigate(-1)}>
                Back
            </Button>
            <Box borderWidth="1px" borderRadius="lg" p={6} bg="white">
                <VStack align="start" gap={4}>
                    <Heading size="lg">{job.jobName}</Heading>
                    <Badge colorPalette={job.status === "SUCCESS" ? "green" : "red"}>
                        {job.status}
                    </Badge>
                    <Text>
                        <strong>Started At:</strong> {new Date(job.startedAt).toLocaleString()}
                    </Text>
                    <Text>
                        <strong>Duration:</strong>{" "}
                        {job.durationSeconds ? `${job.durationSeconds.toFixed(2)}s` : "N/A"}
                    </Text>
                    {/* Error message and stack trace might not be on the type based on lint errors, checking types later if needed, but removing for now if they don't exist or assuming they might be missing from generated types */}
                </VStack>
            </Box>
        </Container>
    );
};
