import { Badge, Box, Flex, Progress, Text, VStack } from "@chakra-ui/react";
import { useCurrentQuotaStatusQuery } from "@graphql/hooks";
import React from "react";

export const APIQuotaUsageWidget: React.FC = () => {
  const { data, loading, error } = useCurrentQuotaStatusQuery();

  if (loading) {
    return <Text>Loading quota usage...</Text>;
  }

  if (error || !data?.currentQuotaStatus) {
    return <Text color="red.500">Failed to load quota usage.</Text>;
  }

  const { callCount, quotaLimit, quotaExceeded } = data.currentQuotaStatus;
  const usagePercentage = (callCount / quotaLimit) * 100;

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
        <Flex justify="space-between" align="center">
          <Text fontSize="lg" fontWeight="bold">
            API Quota Usage
          </Text>
          {quotaExceeded && (
            <Badge colorScheme="red" variant="solid">
              Exceeded
            </Badge>
          )}
        </Flex>

        <Box>
          <Flex justify="space-between" mb={2}>
            <Text fontSize="sm" color="gray.600">
              Used: {callCount}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Limit: {quotaLimit}
            </Text>
          </Flex>
          <Progress.Root
            value={usagePercentage}
            colorPalette={quotaExceeded ? "red" : "green"}
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
      </VStack>
    </Box>
  );
};
