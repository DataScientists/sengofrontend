import { Box, Flex } from '@chakra-ui/react';
import { Story } from '@storybook/blocks';

export const StoryGrid = ({ of: components }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __namedExportsOrder, default: _Default, ...stories } = components;

  return (
    <Flex
      display="flex"
      gap="3"
      borderWidth="thin"
      borderColor="gray.300"
      padding="4"
      borderRadius="md"
      flexWrap="wrap"
    >
      {Object.values(stories).map((component: any, index: any) => (
        <Box key={index} className="grid-item">
          <Story of={component} />
        </Box>
      ))}
    </Flex>
  );
};
