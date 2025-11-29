import { Box, Button, Flex, Input } from "@chakra-ui/react";
import type { KeyboardEvent } from "react";
import React from "react";

type Props = {
  searchTerm?: string;
  setSearchTerm: (searchterm: string) => void;
  handleSearch: () => void;
};

export const SearchBar: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box width="100%" maxWidth="800px" mx="auto" mt={8}>
      <Flex>
        <Input
          placeholder="Search profiles..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          size="lg"
          borderRadius="md"
          mr={2}
        />
        <Button onClick={handleSearch} colorScheme="blue" size="lg">
          Search
        </Button>
      </Flex>
    </Box>
  );
};
