import { Badge, Box, Flex, Progress, Text, VStack } from "@chakra-ui/react";
import { useQuotaStatusQuery } from "@graphql/hooks";
import React, { useState } from "react";

import { MonthYearSelect } from "../MonthYearSelect";

// Billing periods are labeled by the month they end in: the subscription
// renews on the 15th, so period 7/2026 = Jun 15 - Jul 14. On or after the
// 15th we are already in the period ending next month.
const currentBillingPeriod = (): { month: number; year: number } => {
  const now = new Date();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  if (now.getDate() >= 15) {
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  }
  return { month, year };
};

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const APIQuotaUsageWidget: React.FC = () => {
  const initial = currentBillingPeriod();
  const [month, setMonth] = useState(initial.month);
  const [year, setYear] = useState(initial.year);

  const { data, loading, error } = useQuotaStatusQuery({
    variables: { month, year },
  });

  // Period labeled (month, year) runs from the 15th of the previous month
  // through the 14th of the labeled month.
  const periodStart = new Date(year, month - 2, 15);
  const periodEnd = new Date(year, month - 1, 14);
  const periodLabel = `${formatDate(periodStart)} – ${formatDate(periodEnd)}`;

  const tracker = data?.quotaStatus;
  const usagePercentage = tracker
    ? (tracker.callCount / tracker.quotaLimit) * 100
    : 0;

  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      maxW="sm"
    >
      <VStack align="stretch" gap={4}>
        <Flex justify="space-between" align="center" gap={4}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              API Quota Usage
            </Text>
            <Text fontSize="xs" color="gray.500">
              {periodLabel}
            </Text>
          </Box>
          {tracker?.quotaExceeded && (
            <Badge colorScheme="red" variant="solid">
              Exceeded
            </Badge>
          )}
        </Flex>

        <MonthYearSelect
          month={month}
          year={year}
          onChange={(newMonth, newYear) => {
            setMonth(newMonth);
            setYear(newYear);
          }}
        />

        {loading && <Text>Loading quota usage...</Text>}
        {!loading && error && (
          <Text color="red.500">Failed to load quota usage.</Text>
        )}
        {!loading && !error && !tracker && (
          <Text fontSize="sm" color="gray.500">
            No quota data recorded for this period.
          </Text>
        )}
        {!loading && tracker && (
          <>
            <Box>
              <Flex justify="space-between" mb={2}>
                <Text fontSize="sm" color="gray.600">
                  Used: {tracker.callCount}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Limit: {tracker.quotaLimit}
                </Text>
              </Flex>
              <Progress.Root
                value={Math.min(usagePercentage, 100)}
                colorPalette={tracker.quotaExceeded ? "red" : "green"}
                size="sm"
              >
                <Progress.Track>
                  <Progress.Range />
                </Progress.Track>
              </Progress.Root>
            </Box>

            <Text fontSize="xs" color="gray.500" textAlign="right">
              {usagePercentage.toFixed(1)}% used
            </Text>
          </>
        )}
      </VStack>
    </Box>
  );
};
