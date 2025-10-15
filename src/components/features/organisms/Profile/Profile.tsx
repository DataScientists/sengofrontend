import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import type { ProfileFragment } from '@graphql/types';

interface ProfileProps {
  profile: ProfileFragment;
  searchTerm?: string;
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const Highlight: React.FC<{ text: string; term?: string }> = ({ text, term }) => {
  const t = term?.trim();
  if (!t) return <>{text}</>;

  const regex = new RegExp(`(${escapeRegExp(t)})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, idx) => {
        if (part.toLowerCase() === t.toLowerCase()) {
          return (
            <Box as="mark" key={idx} bg="yellow.200" color="black" px={0.5}>
              {part}
            </Box>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </>
  );
};

export const Profile: React.FC<ProfileProps> = ({ profile, searchTerm }) => {
  return (
    <Box 
      p={4} 
      borderWidth="1px" 
      borderRadius="md" 
      shadow="sm"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'md',
      }}
    >
      <Text fontWeight="bold" fontSize="lg">
        <Highlight text={profile.name} term={searchTerm} />
      </Text>
      <Text>
        <Highlight text={profile.title} term={searchTerm} />
      </Text>
      <Text fontSize="sm" color="gray.500">{profile.urn}</Text>
    </Box>
  );
};

Profile.displayName = 'Profile';