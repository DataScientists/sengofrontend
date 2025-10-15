import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useProfileTitleGroupService } from "@service/profiles";
import React, { useCallback, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { useSearchBarContext } from "../SearchBar/SearchBarProvider";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
  "#FFC658",
  "#FF6B9D",
  "#C4B5FD",
  "#A78BFA",
];

export const ProfileTitleChart: React.FC = () => {
  const { searchTerm } = useSearchBarContext();
  const { fetchProfileTitleGroup, data, loading, error } =
    useProfileTitleGroupService();
  const [minCount, setMinCount] = useState<number>(1);

  const handleGenerateGraph = useCallback(async () => {
    await fetchProfileTitleGroup({
      searchTerm: searchTerm.trim() || null,
      minCount: minCount,
    });
  }, [fetchProfileTitleGroup, searchTerm, minCount]);

  const handleMinCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);

    if (!isNaN(value) && value >= 0) {
      setMinCount(value);
    } else if (e.target.value === "") {
      setMinCount(1);
    }
  };

  const chartData =
    data?.map((item) => ({
      name: item.title,
      value: item.count,
    })) ?? [];

  return (
    <Box>
      <Box mb={4}>
        <Box mb={3}>
          <Text fontSize="sm" mb={2} fontWeight="medium">
            Minimum Count
          </Text>
          <Input
            type="number"
            value={minCount}
            onChange={handleMinCountChange}
            min={0}
            placeholder="Enter minimum count"
          />
        </Box>
        <Button
          onClick={() => void handleGenerateGraph()}
          colorScheme="blue"
          loading={loading}
          disabled={loading}
          width="full"
        >
          Generate Graph
        </Button>
      </Box>

      {error && (
        <Box color="red.500" mb={4}>
          <Text>Error: {error.message}</Text>
        </Box>
      )}

      {data && chartData.length > 0 && (
        <Box>
          <Heading as="h3" size="md" mb={4}>
            Profile Distribution by Title
          </Heading>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                // label={({ name, percent }) =>
                //   `${name}: ${(percent * 100).toFixed(0)}%`
                // }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <Box mt={4}>
            <Text fontSize="sm" color="gray.600">
              Total profiles:{" "}
              {chartData.reduce((sum, item) => sum + item.value, 0)}
            </Text>
          </Box>
        </Box>
      )}

      {data && chartData.length === 0 && (
        <Box textAlign="center" py={8} color="gray.500">
          <Text>No data available</Text>
        </Box>
      )}
    </Box>
  );
};

ProfileTitleChart.displayName = "ProfileTitleChart";
