import { Badge, HStack, Heading, Text, VStack, Wrap } from "@chakra-ui/react";
import { Avatar } from "@components/ui/molecules/Avatar";
import type { ProfileDetailFragment } from "@graphql/types";
import React from "react";

type Props = {
    profile: ProfileDetailFragment;
};

export const ProfileHeader: React.FC<Props> = ({ profile }) => (
    <HStack gap={4} align="start">
        <Avatar size="xl" name={profile.name} />
        <VStack align="start" gap={1}>
            <Heading size="lg">{profile.name}</Heading>
            {profile.headline && (
                <Text color="gray.700">{profile.headline}</Text>
            )}
            {profile.title && <Text color="gray.600">{profile.title}</Text>}
            <Wrap gap={2}>
                {profile.username && (
                    <Badge colorPalette="purple">@{profile.username}</Badge>
                )}
                {profile.urn && <Badge colorPalette="blue">{profile.urn}</Badge>}
            </Wrap>
        </VStack>
    </HStack>
);
