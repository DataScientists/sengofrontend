import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

import {
    EducationsSection,
    PositionsSection,
    PostsSection,
    ProfileHeader,
    ProfileInfoGrid,
    SkillsSection,
} from "./components";
import { ProfileDetailProvider, useProfileDetailContext } from "./Provider";

export const Component: React.FC = () => {
    return (
        <ProfileDetailProvider>
            <WrappedComponent />
        </ProfileDetailProvider>
    );
};

const WrappedComponent: React.FC = () => {
    const { data, loading, error, username, posts, postsLoading, postsError } =
        useProfileDetailContext();
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
                    <ProfileHeader profile={profile} />
                    <ProfileInfoGrid profile={profile} />
                    <SkillsSection skills={profile.skills} />
                    <EducationsSection educations={profile.educations} />
                    <PositionsSection positions={profile.positions} />
                    <PostsSection
                        username={username}
                        posts={posts}
                        loading={postsLoading}
                        error={postsError}
                    />
                </VStack>
            </Box>
        </Container>
    );
};
