import { Box, SimpleGrid, Stat, Text } from "@chakra-ui/react";
import { useJobStatsQuery } from "@graphql/hooks";
import React from "react";

type Props = {
  jobName: string;
};

export const JobStatsWidget: React.FC<Props> = ({ jobName }) => {
  const days = new Date().getDate();
  const { data, loading, error } = useJobStatsQuery({
    variables: {
      jobName,
      days,
    },
  });

  if (loading) {
    return <Text>Loading job stats...</Text>;
  }

  if (error || !data?.jobStats) {
    return <Text color="red.500">Failed to load job stats.</Text>;
  }

  const {
    totalExecutions,
    successRate,
    averageDuration,
    totalProfiles,
    totalAPICallsMade,
  } = data.jobStats;

  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      width="full"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Job Stats: {jobName} (This Month)
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} gap={5}>
        <Stat.Root>
          <Stat.Label>Executions</Stat.Label>
          <Stat.ValueText>{totalExecutions}</Stat.ValueText>
        </Stat.Root>
        <Stat.Root>
          <Stat.Label>Success Rate</Stat.Label>
          <Stat.ValueText>{successRate.toFixed(1)}%</Stat.ValueText>
        </Stat.Root>
        <Stat.Root>
          <Stat.Label>Avg Duration</Stat.Label>
          <Stat.ValueText>{averageDuration.toFixed(2)}s</Stat.ValueText>
        </Stat.Root>
        <Stat.Root>
          <Stat.Label>Profiles</Stat.Label>
          <Stat.ValueText>{totalProfiles}</Stat.ValueText>
        </Stat.Root>
        <Stat.Root>
          <Stat.Label>API Calls</Stat.Label>
          <Stat.ValueText>{totalAPICallsMade}</Stat.ValueText>
        </Stat.Root>
      </SimpleGrid>
    </Box>
  );
};
