import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

import { asItems, formatDateRange, str } from "./helpers";

type Props = {
    educations: unknown;
};

export const EducationsSection: React.FC<Props> = ({ educations }) => {
    const items = asItems(educations);
    if (items.length === 0) return null;

    return (
        <Box w="full">
            <Heading size="md" mb={3}>
                Education
            </Heading>
            <VStack align="stretch" gap={3}>
                {items.map((edu, index) => {
                    const degreeLine = [str(edu.degree), str(edu.fieldOfStudy)]
                        .filter(Boolean)
                        .join(" · ");
                    const range = formatDateRange(edu.start, edu.end);
                    return (
                        <Box
                            key={index}
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                        >
                            <Text fontWeight="bold">
                                {str(edu.schoolName) || "Unknown school"}
                            </Text>
                            {degreeLine && (
                                <Text fontSize="sm">{degreeLine}</Text>
                            )}
                            {str(edu.grade) && (
                                <Text fontSize="sm" color="gray.600">
                                    Grade: {str(edu.grade)}
                                </Text>
                            )}
                            {range && (
                                <Text fontSize="sm" color="gray.500">
                                    {range}
                                </Text>
                            )}
                            {str(edu.description) && (
                                <Text fontSize="sm" mt={1}>
                                    {str(edu.description)}
                                </Text>
                            )}
                        </Box>
                    );
                })}
            </VStack>
        </Box>
    );
};
