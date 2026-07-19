import { Badge, Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

import { asItems, formatDateRange, str } from "./helpers";

type Props = {
    positions: unknown;
};

export const PositionsSection: React.FC<Props> = ({ positions }) => {
    const items = asItems(positions);
    if (items.length === 0) return null;

    return (
        <Box w="full">
            <Heading size="md" mb={3}>
                Positions
            </Heading>
            <VStack align="stretch" gap={3}>
                {items.map((pos, index) => {
                    const range = formatDateRange(pos.start, pos.end);
                    const meta = [
                        str(pos.location),
                        str(pos.employmentType),
                        str(pos.companyIndustry),
                    ]
                        .filter(Boolean)
                        .join(" · ");
                    return (
                        <Box
                            key={index}
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                        >
                            <HStack justify="space-between" align="start">
                                <Text fontWeight="bold">
                                    {str(pos.title) || "Unknown role"}
                                </Text>
                                {range && (
                                    <Badge variant="subtle" colorPalette="gray">
                                        {range}
                                    </Badge>
                                )}
                            </HStack>
                            {str(pos.companyName) && (
                                <Text fontSize="sm">
                                    {str(pos.companyName)}
                                </Text>
                            )}
                            {meta && (
                                <Text fontSize="sm" color="gray.500">
                                    {meta}
                                </Text>
                            )}
                            {str(pos.description) && (
                                <Text fontSize="sm" mt={1} whiteSpace="pre-wrap">
                                    {str(pos.description)}
                                </Text>
                            )}
                        </Box>
                    );
                })}
            </VStack>
        </Box>
    );
};
