import bgImage from "@assets/app-bg.png";
import { Container } from "@components/ui/atoms";
import { Flex } from "@components/ui/atoms/Flex";

export const AppLayout: React.FCWithChildren = (props) => {
  return (
    <Flex
      flex="1"
      w="full"
      h="full"
      as="main"
      position="relative"
      css={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        zIndex: 0,
      }}
      overflow="scroll"
    >
      <Container
        display="flex"
        flexDir="column"
        position="relative"
        zIndex="docked"
        maxW="12xl"
        pt="16px"
      >
        <Flex width="full">{props.children}</Flex>
      </Container>
    </Flex>
  );
};
