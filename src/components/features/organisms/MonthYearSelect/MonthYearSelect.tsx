import { HStack, Select, createListCollection } from "@chakra-ui/react";
import React from "react";

type Props = {
  month: number; // 1-12
  year: number;
  onChange: (month: number, year: number) => void;
};

const FIRST_DATA_YEAR = 2024;

const monthCollection = createListCollection({
  items: [
    { label: "January", value: "1" },
    { label: "February", value: "2" },
    { label: "March", value: "3" },
    { label: "April", value: "4" },
    { label: "May", value: "5" },
    { label: "June", value: "6" },
    { label: "July", value: "7" },
    { label: "August", value: "8" },
    { label: "September", value: "9" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ],
});

const yearCollection = createListCollection({
  items: Array.from(
    { length: new Date().getFullYear() - FIRST_DATA_YEAR + 1 },
    (_, i) => {
      const year = String(new Date().getFullYear() - i);
      return { label: year, value: year };
    },
  ),
});

export const MonthYearSelect: React.FC<Props> = ({
  month,
  year,
  onChange,
}) => (
  <HStack gap={2}>
    <Select.Root
      collection={monthCollection}
      value={[String(month)]}
      onValueChange={(details) => {
        onChange(Number(details.value[0]), year);
      }}
      width="140px"
      size="sm"
    >
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Month" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {monthCollection.items.map((item) => (
            <Select.Item key={item.value} item={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
    <Select.Root
      collection={yearCollection}
      value={[String(year)]}
      onValueChange={(details) => {
        onChange(month, Number(details.value[0]));
      }}
      width="100px"
      size="sm"
    >
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Year" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {yearCollection.items.map((item) => (
            <Select.Item key={item.value} item={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  </HStack>
);
