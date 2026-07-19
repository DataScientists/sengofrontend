import { Box, Flex, SimpleGrid, Stat, Text } from "@chakra-ui/react";
import { useJobStatsQuery } from "@graphql/hooks";
import React, { useState } from "react";

import { MonthYearSelect } from "../MonthYearSelect";

type Props = {
  jobName: string;
  title?: string;
};

export const JobStatsWidget: React.FC<Props> = ({ jobName, title }) => {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [year, setYear] = useState(now.getFullYear());

  const { data, loading, error } = useJobStatsQuery({
    variables: {
      jobName,
      month,
      year,
    },
  });

  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      width="full"
    >
      <Flex justifyContent="space-between" alignItems="center" gap={4} mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          {title ?? `Job Stats: ${jobName}`}
        </Text>
        <MonthYearSelect
          month={month}
          year={year}
          onChange={(newMonth, newYear) => {
            setMonth(newMonth);
            setYear(newYear);
          }}
        />
      </Flex>
      {loading && <Text>Loading job stats...</Text>}
      {!loading && (error || !data?.jobStats) && (
        <Text color="red.500">Failed to load job stats.</Text>
      )}
      {!loading && data?.jobStats && (
        <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} gap={5}>
          <Stat.Root>
            <Stat.Label>Executions</Stat.Label>
            <Stat.ValueText>{data.jobStats.totalExecutions}</Stat.ValueText>
          </Stat.Root>
          <Stat.Root>
            <Stat.Label>Success Rate</Stat.Label>
            <Stat.ValueText>
              {data.jobStats.successRate.toFixed(1)}%
            </Stat.ValueText>
          </Stat.Root>
          <Stat.Root>
            <Stat.Label>Avg Duration</Stat.Label>
            <Stat.ValueText>
              {data.jobStats.averageDuration.toFixed(2)}s
            </Stat.ValueText>
          </Stat.Root>
          <Stat.Root>
            <Stat.Label>Profiles</Stat.Label>
            <Stat.ValueText>{data.jobStats.totalProfiles}</Stat.ValueText>
          </Stat.Root>
          <Stat.Root>
            <Stat.Label>API Calls</Stat.Label>
            <Stat.ValueText>{data.jobStats.totalAPICallsMade}</Stat.ValueText>
          </Stat.Root>
        </SimpleGrid>
      )}
    </Box>
  );
};
