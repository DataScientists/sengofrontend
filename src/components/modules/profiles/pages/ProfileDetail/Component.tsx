import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Button,
    HStack,
    Badge,
    Code,
} from "@chakra-ui/react";
import { Avatar } from "@components/ui/molecules/Avatar";
import { useNavigate } from "react-router-dom";
import { ProfileDetailProvider, useProfileDetailContext } from "./Provider";
import React from "react";

export const Component: React.FC = () => {
    return (
        <ProfileDetailProvider>
            <WrappedComponent />
        </ProfileDetailProvider>
    );
};

const WrappedComponent: React.FC = () => {
    const { data, loading, error } = useProfileDetailContext();
    const navigate = useNavigate();

    if (loading) {
        return (
            <Container maxW="container.md" py={8}>
                <Text>Loading...</Text>
            </Container>
        );
    }

    if (error || !data?.profile) {
        return (
            <Container maxW="container.md" py={8}>
                <Text color="red.500">
                    Error: {error?.message || "Profile not found"}
                </Text>
            </Container>
        );
    }

    const { profile } = data;

    return (
        <Container maxW="container.md" py={8}>
            <Button mb={4} onClick={() => navigate(-1)}>
                Back
            </Button>
            <Box borderWidth="1px" borderRadius="lg" p={6} bg="white">
                <VStack align="start" gap={6}>
                    <HStack gap={4}>
                        <Avatar size="xl" name={profile.name} />
                        <VStack align="start" gap={1}>
                            <Heading size="lg">{profile.name}</Heading>
                            <Text color="gray.600">{profile.title}</Text>
                            {profile.urn && <Badge colorPalette="blue">{profile.urn}</Badge>}
                        </VStack>
                    </HStack>

                    <Box>
                        <Heading size="md" mb={2}>
                            Location
                        </Heading>
                        <Text>
                            {[profile.city, profile.country].filter(Boolean).join(", ") || "N/A"}
                        </Text>
                    </Box>

                    {profile.skills && (
                        <Box>
                            <Heading size="md" mb={2}>
                                Skills
                            </Heading>
                            <Text>{Array.isArray(profile.skills) ? profile.skills.join(", ") : JSON.stringify(profile.skills)}</Text>
                        </Box>
                    )}

                    {profile.educations && (
                        <Box w="full">
                            <Heading size="md" mb={2}>
                                Educations
                            </Heading>
                            <Code w="full" p={2} display="block" whiteSpace="pre-wrap">
                                {JSON.stringify(profile.educations, null, 2)}
                            </Code>
                        </Box>
                    )}

                    {profile.positions && (
                        <Box w="full">
                            <Heading size="md" mb={2}>
                                Positions
                            </Heading>
                            <Code w="full" p={2} display="block" whiteSpace="pre-wrap">
                                {JSON.stringify(profile.positions, null, 2)}
                            </Code>
                        </Box>
                    )}
                </VStack>
            </Box>
        </Container>
    );
};
