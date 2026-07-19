import {
    Badge,
    Box,
    HStack,
    Heading,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react";
import type { ApolloError } from "@apollo/client";
import type { ProfilePostFragment, ProfilePostItemFragment } from "@graphql/types";
import React from "react";

import { formatTimestamp } from "./helpers";

type Props = {
    username?: string | null;
    posts: ProfilePostFragment | null;
    loading: boolean;
    error?: ApolloError;
};

const FETCH_STATUS_COLORS: Record<string, string> = {
    COMPLETED: "green",
    PENDING: "yellow",
    FAILED: "red",
    NOT_FOUND: "gray",
};

const PostItemCard: React.FC<{ item: ProfilePostItemFragment }> = ({
    item,
}) => {
    const reactions = [
        { label: "Reactions", value: item.totalReactions },
        { label: "Likes", value: item.likeCount },
        { label: "Comments", value: item.commentsCount },
        { label: "Reposts", value: item.repostsCount },
    ].filter((entry) => entry.value > 0);

    return (
        <Box p={4} borderWidth="1px" borderRadius="md">
            <HStack justify="space-between" align="start" mb={2}>
                <HStack gap={2}>
                    {item.postedAt && (
                        <Text fontSize="sm" color="gray.500">
                            {formatTimestamp(item.postedAt)}
                        </Text>
                    )}
                    {item.contentType && (
                        <Badge variant="subtle" colorPalette="blue">
                            {item.contentType}
                        </Badge>
                    )}
                    {item.isRepost && (
                        <Badge variant="subtle" colorPalette="orange">
                            Repost
                        </Badge>
                    )}
                </HStack>
                {item.postUrl && (
                    <Link
                        href={item.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        fontSize="sm"
                        color="blue.500"
                    >
                        View on LinkedIn
                    </Link>
                )}
            </HStack>
            {item.text ? (
                <Text fontSize="sm" whiteSpace="pre-wrap">
                    {item.text}
                </Text>
            ) : (
                <Text fontSize="sm" color="gray.500">
                    (no text)
                </Text>
            )}
            {reactions.length > 0 && (
                <HStack gap={4} mt={3}>
                    {reactions.map((entry) => (
                        <Text key={entry.label} fontSize="xs" color="gray.600">
                            {entry.label}: {entry.value}
                        </Text>
                    ))}
                </HStack>
            )}
        </Box>
    );
};

export const PostsSection: React.FC<Props> = ({
    username,
    posts,
    loading,
    error,
}) => {
    return (
        <Box w="full">
            <HStack mb={3} gap={3}>
                <Heading size="md">Posts</Heading>
                {posts && (
                    <Badge
                        colorPalette={
                            FETCH_STATUS_COLORS[posts.fetchStatus] ?? "gray"
                        }
                    >
                        {posts.fetchStatus}
                    </Badge>
                )}
            </HStack>

            {!username && (
                <Text fontSize="sm" color="gray.500">
                    This profile has no LinkedIn username, so posts cannot be
                    linked.
                </Text>
            )}
            {username && loading && <Text fontSize="sm">Loading posts...</Text>}
            {username && !loading && error && (
                <Text fontSize="sm" color="red.500">
                    Failed to load posts.
                </Text>
            )}
            {username && !loading && !error && !posts && (
                <Text fontSize="sm" color="gray.500">
                    No posts have been fetched for this profile yet.
                </Text>
            )}
            {posts && (
                <VStack align="stretch" gap={3}>
                    {posts.errorMessage && (
                        <Text fontSize="sm" color="red.500">
                            {posts.errorMessage}
                        </Text>
                    )}
                    {posts.items.length === 0 ? (
                        <Text fontSize="sm" color="gray.500">
                            No post items recorded.
                        </Text>
                    ) : (
                        posts.items.map((item) => (
                            <PostItemCard key={item.id} item={item} />
                        ))
                    )}
                </VStack>
            )}
        </Box>
    );
};
