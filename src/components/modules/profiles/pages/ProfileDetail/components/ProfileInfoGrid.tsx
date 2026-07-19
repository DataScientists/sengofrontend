import { Box, Code, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import type { ProfileDetailFragment } from "@graphql/types";
import React from "react";

type Props = {
    profile: ProfileDetailFragment;
};

const InfoItem: React.FC<{ label: string; value?: string | null }> = ({
    label,
    value,
}) => {
    if (!value) return null;
    return (
        <Box>
            <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                {label}
            </Text>
            <Text fontSize="sm" wordBreak="break-all">
                {value}
            </Text>
        </Box>
    );
};

export const ProfileInfoGrid: React.FC<Props> = ({ profile }) => {
    const location =
        [profile.city, profile.country].filter(Boolean).join(", ") || null;
    const hasGeoData =
        profile.geoData && Object.keys(profile.geoData as object).length > 0;

    return (
        <Box w="full">
            <Heading size="md" mb={3}>
                Details
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                <InfoItem label="First name" value={profile.firstName} />
                <InfoItem label="Last name" value={profile.lastName} />
                <InfoItem label="Location" value={location} />
                <InfoItem label="Source file" value={profile.sourceFile} />
                <InfoItem label="Raw data S3 key" value={profile.rawDataS3Key} />
                <InfoItem
                    label="Cleaned data S3 key"
                    value={profile.cleanedDataS3Key}
                />
                <InfoItem
                    label="Entry status"
                    value={profile.profileEntry?.status ?? null}
                />
                <InfoItem
                    label="Entry fetch count"
                    value={
                        profile.profileEntry
                            ? String(profile.profileEntry.fetchCount)
                            : null
                    }
                />
                <InfoItem label="Created" value={profile.createdAt} />
                <InfoItem label="Updated" value={profile.updatedAt} />
            </SimpleGrid>
            {hasGeoData && (
                <Box mt={4}>
                    <Text
                        fontSize="xs"
                        color="gray.500"
                        textTransform="uppercase"
                        mb={1}
                    >
                        Geo data
                    </Text>
                    <Code
                        w="full"
                        p={2}
                        display="block"
                        whiteSpace="pre-wrap"
                        fontSize="xs"
                    >
                        {JSON.stringify(profile.geoData, null, 2)}
                    </Code>
                </Box>
            )}
        </Box>
    );
};
