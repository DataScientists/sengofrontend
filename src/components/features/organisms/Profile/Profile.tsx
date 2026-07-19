import { Box, Text } from '@chakra-ui/react';
import { profileDetailPath } from '@components/modules/profiles/urls';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProfileFragment } from '@graphql/types';

interface ProfileProps {
  profile: ProfileFragment;
}

export const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const navigate = useNavigate();

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      shadow="sm"
      cursor="pointer"
      onClick={() => navigate(profileDetailPath(profile.id))}
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'md',
      }}
    >
      <Text fontWeight="bold" fontSize="lg">{profile.name}</Text>
      <Text>{profile.title}</Text>
      <Text fontSize="sm" color="gray.500">{profile.urn}</Text>
    </Box>
  );
};

Profile.displayName = 'Profile';