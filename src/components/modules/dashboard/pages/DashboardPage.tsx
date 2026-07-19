import { Box, Heading, VStack } from "@chakra-ui/react";
import { APIQuotaUsageWidget } from "@components/features/organisms/APIQuotaUsageWidget";
import { JobStatsWidget } from "@components/features/organisms/JobStatsWidget";
import React from "react";

export const DashboardPage: React.FC = () => {
    return (
        <Box p={8}>
            <Heading mb={6}>Dashboard</Heading>
            <VStack gap={6} align="stretch">
                <Box maxW="sm">
                    <APIQuotaUsageWidget />
                </Box>
                <JobStatsWidget
                    jobName="profile_fetcher"
                    title="Job Stats: Profile Fetcher"
                />
                <JobStatsWidget
                    jobName="profile_posts_fetcher"
                    title="Job Stats: Profile Posts Fetch"
                />
            </VStack>
        </Box>
    );
};
